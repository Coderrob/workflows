import { getFileProvider } from '../../utils/files.js';
import { MarketplaceItem } from './marketplace-Item.js';
import { MARKETPLACE_FILE, DEPRECATIONS_FILE } from './marketplace.js';

/**
 * Handles storage and retrieval of marketplace data.
 */
export class MarketplaceStorage {
  private fileProvider = getFileProvider<MarketplaceItem[]>(MARKETPLACE_FILE);

  async getCatalog(): Promise<MarketplaceItem[]> {
    const { data: content = [] } = await this.fileProvider.load(
      MARKETPLACE_FILE,
      []
    );
    return content;
  }

  async saveCatalog(actions: MarketplaceItem[]): Promise<void> {
    await this.fileProvider.save(MARKETPLACE_FILE, actions);
  }

  async getDeprecations(): Promise<MarketplaceItem[]> {
    const { data = [] } = await this.fileProvider.load(DEPRECATIONS_FILE, []);
    return data;
  }

  async saveDeprecations(deprecatedActions: MarketplaceItem[]): Promise<void> {
    const existingDeprecations = await this.getDeprecations();
    await this.fileProvider.save(DEPRECATIONS_FILE, [
      ...new Set([...existingDeprecations, ...deprecatedActions]),
    ]);
  }
}
