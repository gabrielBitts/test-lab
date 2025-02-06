/// <reference types='cypress'/>

class ResultsPage {
    // Duckduckgo results page buttons, inputs and its locators
    elements = {
        articleLocator: () => cy.get('[data-testid="result"]'),
        articleUrl: () => cy.get('[data-testid="result-extras-url-link"]'),
    }

    // Duckduckgo results page methods
    checkDisplayedText(string) {
        this.elements.articleLocator().eq(0).should('contain', string)
    }

    checkDisplayedUrl(string) {
        this.elements.articleUrl().eq(0).should('contain', string)
    }
}

export default new ResultsPage()
