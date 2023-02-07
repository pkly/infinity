const Encore = require("@symfony/webpack-encore");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("../assets/js")
    .setPublicPath("/assets/js")
    .addEntry("app", "./src/main.ts")

    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()

    .enableVueLoader()
    .enableTypeScriptLoader((options) => {
        options.appendTsSuffixTo = [/\.vue$/];
    });

module.exports = Encore.getWebpackConfig();
