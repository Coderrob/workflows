import * as cheerio from 'cheerio';
import axios from 'axios';
import path from 'path';
import { isError } from '../../utils/guards.js';
import { MarketplaceItem } from './marketplace-Item.js';
import { MarketplaceStorage } from './marketplace-storage.js';

const GITHUB_HOST = 'https://github.com';
const MARKETPLACE_URL = `${GITHUB_HOST}/marketplace?type=actions`;
export const MARKETPLACE_FILE = path.resolve(__dirname, '../marketplace.json');
export const DEPRECATIONS_FILE = path.resolve(
  __dirname,
  '../deprecations.json'
);

/**
 * Scrapes the GitHub Marketplace for available actions.
 */
class MarketplaceScraper {
  private storage: MarketplaceStorage;

  constructor(storage: MarketplaceStorage) {
    this.storage = storage;
  }

  /**
   * Fetches HTML from a given URL.
   * @param url - The URL to fetch.
   * @returns Cheerio instance or null on failure.
   */
  private async fetchHTML(url: string): Promise<cheerio.CheerioAPI | null> {
    try {
      const { data } = await axios.get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      return cheerio.load(data);
    } catch (error) {
      console.error(
        `Failed to fetch ${url}:`,
        isError(error) ? error.message : String(error)
      );
      return null;
    }
  }

  /**
   * Extracts marketplace items from loaded HTML.
   * @param $ - Cheerio instance containing the loaded HTML.
   * @returns Array of marketplace items.
   */
  private extractItems($: cheerio.CheerioAPI): MarketplaceItem[] {
    return $('[data-testid="marketplace-item"]')
      .map((_, element) => MarketplaceItem.fromElement($(element), $))
      .get()
      .filter((item): item is MarketplaceItem => !!item);
  }

  /**
   * Paginates through the GitHub Marketplace and scrapes all available actions.
   * @returns A list of MarketplaceItem objects.
   */
  public async scrape(): Promise<MarketplaceItem[]> {
    let page = 1;
    let hasNextPage = true;
    const items: MarketplaceItem[] = [];

    while (hasNextPage) {
      console.log(`Scraping page ${page}...`);
      const $ = await this.fetchHTML(`${MARKETPLACE_URL}&page=${page}`);

      if (!$) break;

      const newActions = this.extractItems($);

      if (newActions.length > 0) {
        items.push(...newActions);
        page++;
      } else {
        hasNextPage = false;
      }
    }

    return items;
  }

  /**
   * Updates marketplace data, detects deprecations, and persists results.
   */
  public async updateCatalog(): Promise<void> {
    const catalogItems = await this.storage.getCatalog();
    const marketplaceItems = await this.scrape();

    const items = [...new Set(catalogItems)];
    const newItems = [...new Set(marketplaceItems)];

    const updatedItems = newItems.map((scraped) => {
      const existing = items.find((a) => a.link === scraped.link);
      return existing ? { ...existing, ...scraped } : scraped;
    });

    const deprecatedItems = items.filter(
      (a) => !newItems.some(({ link }) => link === a.link)
    );

    await this.storage.saveCatalog(updatedItems);

    if (deprecatedItems.length > 0) {
      await this.storage.saveDeprecations(deprecatedItems);
    }

    console.log(`Marketplace updated: ${updatedItems.length} actions.`);
    console.log(`Deprecated actions: ${deprecatedItems.length}`);
  }
}

/**
 * Executes the marketplace update process.
 */
(async () => {
  const storage = new MarketplaceStorage();
  const scraper = new MarketplaceScraper(storage);
  await scraper.updateCatalog();
})();
