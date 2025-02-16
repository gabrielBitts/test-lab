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

    async searchResult(text: string) {
        let resultUrl = $('h2')
        await expect(resultUrl).toHaveText(text)
    }

    async checkRegionsArraySize(num: number) {
        let regionsArray = await $$('//body/div[7]/div/div/div/div[2]/div').length
        
        await expect(regionsArray - 1).toBeGreaterThanOrEqual(num)
    }
}

export default new ResultsPage()
