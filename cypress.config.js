const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "evhnvy",
  e2e: {
    baseUrl: 'https://adopet-frontend-cypress.vercel.app/',
    video: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
  },
});
