module.exports = {
    theme: "antdocs",
    title: "Ghost",
    description: "",
    base: '/ghost/',
    head: [
        ['link', {rel: 'icon', href: './public/assets/favicon.ico'}]
    ],
    markdown: {
        lineNumbers: false,
    },
    themeConfig: {
        smoothScroll: true,
        nav: require("./config/nav"),
        sidebar: require("./config/sidebar"),
        lastUpdated: "Last Updated",
        repo: "https://github.com/deeplus/ghost",
        editLinks: false,
    },
}
