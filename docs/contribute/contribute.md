---
id: contribute
title: How to contribute
sidebar_label: Contribute
---

This portal is built with [Docusaurus v2](https://docusaurus.io/), a static site generator which uses
[React](https://reactjs.org/) in its core. The documentation itself is written using a superset of
[Markdown](https://www.markdownguide.org/) enriched with 
[several features](https://docusaurus.io/docs/markdown-features).

:::tip
Refer to the [official Docusaurus documentation](https://v2.docusaurus.io/docs/) for an in-depth explanation of all the
available feature.
:::

## Add a new contribution

To contribute to the Mia-Platform docs:

1. Clone the repository.

2. Create a new branch named `activity/task-topic`, where
    - **activity** can be:
      - `edit` if you are changing one or more pages;  
      - `new` if you are working on a new page or section related to features already in production;  
      - `project` if you are writing the documentation of a project before or during the development;  
      - `remove` if you are deleting information.
    - **task (optional)** is an identifier of the task you are working on, if existent.
    - **topic**: a short description of what you are documenting.

    An example of this naming convention is `new/MD-333-authentication-section`.

3. Share your knowledge!

4. Run locally the portal to test the changes (see the README.md file in the repository to know hot to run the project
   locally).

5. Submit a merge request naming it according to the rule `Activity (task): topic`.

## Repository structure

It follows a brief description of the content of each of the folders of this repository.

- `diagrams` contains the [diagrams.net](https://app.diagrams.net/) source files of the diagrams found in the 
  documentation.
- `docs` contains the markdown documentation pages.
- `src` contains the React.js custom code.

### Documentations pages

Each markdown file has to include the following preamble.

```
---
id: <id>
title:  <Title displayed in the page>
sidebar_label: <Title displayed in the sidebar>
---
```

The complete id of a page will be `<path>+id`.

## Change the portal navigation

### Top bar

The main configuration file is `docusaurus.config.js`. It can be used to set plugins as well as other basic and advanced 
features of the portal. The content of the top bar can be set in this file modifying the content of the 
`themeConfig > navbar > items` array. Each link has to be the *final id* of a documentation page.

For example, the link `docs/intro/getting_started` refers to the markdown file `getting_started` placed in 
the `docs/business_suite` folder and having the id `getting_started`. The name of the file does not matter, but it's
advisable to keep it aligned with the id.

### Side menu

The side menu is configured in the `sidebars.js` file.

To add an item linked to a page you have to add an object with `"type": "doc"` and the property `"id"` valued with the 
final id of the page.

To create an element that contains other sub-elements you have to add an object with `"type": "category"` and the 
property `"label"` valued with the label of the item.
