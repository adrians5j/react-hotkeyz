const baseConfig = require("./config.base");

// Create a module map to point packages to the build output
const moduleNameMapper = {};

moduleNameMapper["^react-hotkeyz/(.*)$"] = "<rootDir>dist/$1";
moduleNameMapper["^react-hotkeyz$"] = "<rootDir>dist";

module.exports = Object.assign({}, baseConfig, {
    moduleNameMapper
});
