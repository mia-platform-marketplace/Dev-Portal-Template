# mia_template_service_name_placeholder

This walkthrough will explain to you how to correctly create a microservice that renders a [Docusaurus 2](https://docusaurus.io/) based webpage from the DevOps Console.

Docusaurus is a documentation template that allows you to quickly structure your documentation through the usage of markdown files. It also provides a wide range of additional markdown features.

## Create the Dev Portal Docusaurus Template

To create the service, you will be asked to give the following information:

- Name (Internal Hostname)
- Description (optional)

You can read more about these fields in [Manage your Microservices from the Dev Console](https://docs.mia-platform.eu/development_suite/api-console/api-design/services/) section of Mia-Platform documentation.

Give your microservice the name you prefer (e.g. **dev-portal-docusaurus-template**), then confirm to create the microservice.

## Add an endpoint to your microservice

In order to access your new microservice, it is necessary to create an endpoint that will target it.  

To do so, select `Endpoints` from the Design area and create a new endpoint.
Give your endpoint the pathname specified in the `baseUrl.js` file of the service repository: **/dev-portal/documentation/**. Then, select the option to connect your endpoint to a microservice and select *dev-portal-docusaurus-template*. 

If you wish to change the default endpoint name, check out [how to configure a custom pathname](#configure-baseurljs) later in this walkthrough.

Step 3 of [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#3-creating-the-endpoint) section of Mia-Platform documentation explains in detail how to create an endpoint from the DevOps Console.

## Save your changes

After creating the endpoint associated with your microservice save the changes applied to your project in the DevOps console.  
Remember to choose a meaningful title for your commit (e.g "created `dev-portal-docusaurus-template`, associated `/dev-portal/documentation/` endpoint").

## Visit / Clone Repository

After saving your changes, you can start editing your documentation pages. 
Two main approaches can be used to achieve this goal:

- Cloning the repository on your local machine and directly modifying the content of the files from your IDE or editor of choice;

- Using the editor tool provided by the git provider hosting your repository.

Go back to `Microservices` in the Design area and select the microservice you just created.

From this page, you will be able to visit or clone the microservice repository locally.

## Configure baseUrl.js

In order to change the basic endpoint pathname on which this microservice will be exposed, you can directly configure the `baseUrl.js` file.

If you decide to use a new endpoint path `custom-pathname`, your file should look like this:

```js
const baseUrl = '/custom-pathname/'

module.exports = baseUrl
```

## Run Docusaurus locally

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push it to the `gh-pages` branch.

## Deploy

Once all the changes that you have made are saved on the template repository, you should deploy your project through the DevOps Console. Go to the `Deploy` area of the DevOps Console.  
Select the branch and the environment you previously used and confirm your choices by clicking the *Deploy* button. 

Step 5 of [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#5-deploy-the-project-through-the-api-console) section of Mia-Platform documentation explains in detail how to correctly deploy your project.

## Try it

In order to be fully operational, this template needs the complete configuration of **micro-lc**. Learn more about Mia-Platform micro-frontend launcher on the official [documentation](https://micro-lc.io/).
