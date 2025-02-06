/// <reference types='cypress'/>

class SearchPage {
    // Duckduckgo search page buttons, inputs and its locators
    elements = {
        searchInput: () => cy.get('#searchbox_input'),
        searchButton: () => cy.get("[aria-label='Search']"),
    }

    // Duckduckgo search page methods
    typeSearchText(string) {
        this.elements.searchInput().type(string)
    }
    searchButtonClick() {
        this.elements.searchButton().click()
    }
}

export default new SearchPage()
