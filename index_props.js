import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="hi-there-%F0%9F%91%8B">Hi there 👋<a class="anchor" href="#hi-there-%F0%9F%91%8B">§</a></h3>\n<p>My nickname is xcatliu.<br>\n中文昵称是流浪小猫，也可以叫我小猫。</p>\n<ul>\n<li>🔭 I\'m currently working on <a href="https://github.com/xcatliu/pagic">Pagic</a>, a static-site-generator, built with Deno 🦕 and React</li>\n<li>📚 I\'m the author of <a href="https://github.com/xcatliu/typescript-tutorial">《TypeScript 入门教程》</a></li>\n<li>👯 I\'m the creator and main contributor of <a href="https://github.com/AlloyTeam/eslint-config-alloy">eslint-config-alloy</a></li>\n<li>📫 How to reach me: xcatliu at gmail dot com</li>\n<li>⚡ Fun fact: Whenever you see this lovely cat, yeah that’s me!</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="hi-there-%F0%9F%91%8B">Hi there 👋<a class="anchor" href="#hi-there-%F0%9F%91%8B">§</a></h3>\n<p>My nickname is xcatliu.<br>\n中文昵称是流浪小猫，也可以叫我小猫。</p>\n<ul>\n<li>🔭 I\'m currently working on <a href="https://github.com/xcatliu/pagic">Pagic</a>, a static-site-generator, built with Deno 🦕 and React</li>\n<li>📚 I\'m the author of <a href="https://github.com/xcatliu/typescript-tutorial">《TypeScript 入门教程》</a></li>\n<li>👯 I\'m the creator and main contributor of <a href="https://github.com/AlloyTeam/eslint-config-alloy">eslint-config-alloy</a></li>\n<li>📫 How to reach me: xcatliu at gmail dot com</li>\n<li>⚡ Fun fact: Whenever you see this lovely cat, yeah that’s me!</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#hi-there-%F0%9F%91%8B" }, "Hi there \uD83D\uDC4B")))),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2017-02-04T09:07:36.000Z",
    'updated': "2020-07-10T12:35:20.000Z",
    'excerpt': "Hi there 👋 My nickname is xcatliu. 中文昵称是流浪小猫，也可以叫我小猫。 - 🔭 I'm currently working on Pagic, a static-site-generator, built with Deno 🦕 and React - 📚 I'm the author of 《TypeScript 入...",
    'cover': undefined
};
