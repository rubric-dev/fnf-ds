module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-fnf`
  extends: ["fnf"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};