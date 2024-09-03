const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8xmw4k',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
