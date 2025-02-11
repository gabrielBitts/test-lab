import { $ } from '@wdio/globals'
import Page from './page'

class SearchPage extends Page {
    get searchInput() {
        return $('#searchbox_input')
    }

    get searchButton() {
        return $('button[aria-label="Search"]')
    }

    async searchString(string) {
        await this.searchInput.setValue(string)
        await this.searchButton.click()
    }

    open() {
        return super.open('')
    }
}

export default new SearchPage()
