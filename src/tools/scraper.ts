import axios from 'axios';
import * as cheerio from 'cheerio';
import path from 'path';

const GITHUB_HOST = 'https://github.com';
const MARKETPLACE_URL = `${GITHUB_HOST}/marketplace?type=actions`;
const MARKETPLACE_FILE = path.resolve(__dirname, '../marketplace.json');
const DEPRECATIONS_FILE = path.resolve(__dirname, '../deprecations.json');

async function fetchHTML(url: string) {
  try {
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    return cheerio.load(data);
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error.message);
    return null;
  }
}

async function scrapeMarketplace() {
  let actions = [];
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    console.log(`Scraping page ${page}...`);
    const $ = await fetchHTML(`${MARKETPLACE_URL}&page=${page}`);

    if (!$) break;

    const newActions = $('.col-md-6')
      .map((_, element) => {
        const link = $(element).find('a.d-flex').attr('href');
        const title = $(element).find('h3').text().trim();
        const description = $(element).find('p.mb-1').text().trim();

        if (link) {
          return {
            githubHost: GITHUB_HOST,
            projectSlug: link.replace('/marketplace/', ''),
            releaseTag: 'latest', // Default; could be refined by scraping release data
            friendlyName: title,
            description: description,
          };
        }
      })
      .get();

    if (newActions.length > 0) {
      actions = [...actions, ...newActions];
      page++;
    } else {
      hasNextPage = false;
    }
  }

  return actions;
}

async function updateMarketplaceFiles() {
  const existingActions = loadJSON(MARKETPLACE_FILE);
  const existingSlugs = new Set(existingActions.map((a) => a.projectSlug));

  const scrapedActions = await scrapeMarketplace();
  const scrapedSlugs = new Set(scrapedActions.map((a) => a.projectSlug));

  const updatedActions = scrapedActions.map((scraped) => {
    const existing = existingActions.find(
      (a) => a.projectSlug === scraped.projectSlug
    );
    return existing ? { ...existing, ...scraped } : scraped;
  });

  const deprecatedActions = existingActions.filter(
    (a) => !scrapedSlugs.has(a.projectSlug)
  );

  saveJSON(MARKETPLACE_FILE, updatedActions);

  if (deprecatedActions.length > 0) {
    const existingDeprecations = loadJSON(DEPRECATIONS_FILE);
    saveJSON(DEPRECATIONS_FILE, [
      ...existingDeprecations,
      ...deprecatedActions,
    ]);
  }

  console.log(`Marketplace updated: ${updatedActions.length} actions.`);
  console.log(`Deprecated actions: ${deprecatedActions.length}`);
}

updateMarketplaceFiles().catch((error) => {
  console.error('Error updating marketplace files:', error);
  process.exit(1);
});
