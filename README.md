# TypeScript & SCSS Modules Gatsby Starter

Install
```bash
gatsby new SITE_NAME https://github.com/pqt/gatsby-starter-typescript-scss-modules
```

### Features

- Gatsby Configuration contains a block for copyright values. The year is automatically set to the current year `new Date().getFullYear()` and the text can be the organization name, or whatever is needed. This is made available globally now through the `<StaticQuery />` component.

- React Helmet is included for SEO. Helper components to simplify this (somewhat) are on my mental roadmap. [Please post an issue](https://github.com/pqt/gatsby-starter-typescript-scss-modules/issues/new) if it's something you'd like to see. The default title is defined in the custom `<Layout>` wrapper component. It will include the title and description in the `<title>` tag, and just the description in the `<meta name="description">` tag.

- TypeScript. The bread and butter of this starter, includes a Layout component, example Card component and page setup using `.tsx`. Additionally there's also a `globals.d.ts` type definition file that silences a `module not declared` issue for all image filetypes, and actually defines a generic type setup for importing `SCSS` modules.

- (S)CSS Modules are included, SCSS Specifically is being used. Any file using `.module.scss` can be imported and referenced. **These are run through autoprefixer automatically** and the browserslist configuration matches the default Create-React-App values.

### Planned
The roadmap is largely based on my own needs, wants and nice-to-have priority list. Feel free to post a new issue if there's something you need or would like to see implemented. There's even a label for issues of confirmed upcoming changes. [Check out the Planned label](https://github.com/pqt/gatsby-starter-typescript-scss-modules/labels/planned)