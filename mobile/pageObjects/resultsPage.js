import { $ } from '@wdio/globals'

class ResultsPage {
    get regionsDropwdown() {
        return $(
            '//div[@id="react-layout"]/div/div/div/div[1]/nav/div[2]/div/div/span[2]'
        )
    }

    async clickOnRegions() {
        await this.regionsDropwdown.click()
    }

    async searchResult(string) {
        let resultUrl = $('h2')
        await expect(resultUrl).toHaveText(string)
    }

    async checkRegionsArraySize(num) {
        let regionsArray = await $$('//body/div[7]/div/div/div/div[2]')
        expect(regionsArray.length - 1).toHaveChildren({ gte: num })
    }
}

export default new ResultsPage()
