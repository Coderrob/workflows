import * as cheerio from 'cheerio';
import { AnyNode } from 'domhandler';

export class MarketplaceItem {
  constructor(
    public link: string,
    public name: string,
    public type: string,
    public description: string
  ) {}

  /**
   * Factory method to create a MarketplaceItem from a Cheerio element
   */
  static fromElement(
    element: cheerio.Cheerio<AnyNode>,
    $: cheerio.CheerioAPI
  ): MarketplaceItem | null {
    const linkElement = $(element).find('h3 a');
    const typeElement = $(element).find('[data-testid="listing-type-label"]');
    const descriptionElement = $(element).find('p');

    if (
      !linkElement.length ||
      !typeElement.length ||
      !descriptionElement.length
    ) {
      return null;
    }

    return new MarketplaceItem(
      linkElement.attr('href')?.trim() || '',
      linkElement.text().trim() || 'Unknown',
      typeElement.text().trim() || 'Unknown',
      descriptionElement.text().trim() || 'No description available'
    );
  }
}
