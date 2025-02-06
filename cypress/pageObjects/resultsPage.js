/// <reference types='cypress'/>

class ResultsPage {
    // Duckduckgo results page buttons, inputs and its locators
    elements = {
        articleLocator: () => cy.get('[data-testid="result"]'),
        articleUrl: () => cy.get('[data-testid="result-extras-url-link"]'),
        regionsLocator: () => cy.get('[data-testid="region-filter-label"]'),
        regionsArray: () => cy.get('[data-testid="dropdown-options"] > div'),
    }

    // Duckduckgo results page methods
    checkDisplayedText(string) {
        this.elements.articleLocator().eq(0).should('contain', string)
    }

    checkDisplayedUrl(string) {
        this.elements.articleUrl().eq(0).should('contain', string)
    }

    clickOnRegions() {
        this.elements.regionsLocator().click()
    }

    checkRegionsArraySize(num) {
        this.elements
            .regionsArray()
            .eq(2)
            .children('div')
            .then(($divs) => {
                const array = $divs.toArray()
                const slicedArray = array.slice(1)
                expect(slicedArray.length).to.be.greaterThan(num)
            })
    }
}

export default new ResultsPage()
