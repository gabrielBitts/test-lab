import searchPage from "../pageObjects/searchPage"
import resultsPage from "../pageObjects/resultsPage"

describe('DuckDuckGo Search', () => {
    it('Should search "Android" and assert it is being shown', async () => {
        await searchPage.open()
        let string = 'Android' 
        await searchPage.searchString(string)
        await resultsPage.searchResult(string)
    })

    it('Should Validate if Regions Size is Greater Than 10' , async () => {
        await resultsPage.clickOnRegions()
        await resultsPage.checkRegionsArraySize(10)
    })
})
