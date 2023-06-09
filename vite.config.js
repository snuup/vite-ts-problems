
export default {
    esbuild: {
        ignoreAnnotations: true,
        target: 'es2021',
    },
    build: {
        lib: {
            name: "test",
            entry: "index.ts"
        },
        minify: false,
        rollupOptions: {
            output: {
                format: 'es',
                entryFileNames: `app.js`,
                assetFileNames: `[name].[ext]`
            },
        },
        polyfillModulePreload: false
    },
}
