module.exports = {
  configureWebpack: {
    entry: ["regenerator-runtime/runtime.js", "./src/main.js"],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/app.scss";',
      },
      sass: {
        additionalData: `@import "@/assets/scss/app.sass"`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("VuetifyLoaderPlugin").tap((args) => [
      {
        match(originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith("core-")) {
            return [
              camelTag,
              `import ${camelTag} from '@/components/core/${camelTag.substring(
                4
              )}.vue'`,
            ];
          }
        },
      },
    ]);
  },
  transpileDependencies: ["vuetify"],
};
