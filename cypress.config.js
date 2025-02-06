const { defineConfig } = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    retries: 2,
    reporter: 'spec',
    e2e: {
        baseUrl: 'https://start.duckduckgo.com/',
        specPattern: 'cypress/e2e/*.cy.{js, jsx, ts}',
        testIsolation: false,
    },
})
