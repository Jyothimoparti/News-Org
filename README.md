Angular Application to filter news related to UIC on the web

## Description

This angular application consumes a Restapi endpoint provided by newsapi.org to display all the news articles related to UIC on the websites that are mentioned previously. Each news article when clicked, displays the details of the article such as author, description, published date, sources, URL and title.

Two way binding function is showcased by "Changing an article title at the bottom of the page that has attributes of the article when clicked on a particular article, changes the title name in the list of the articles above"
To view the endpoint and documentation on the query parameters, refer https://newsapi.org/docs/endpoints/everything

**Note: It displays articles that are mentioned upto last 1 month till today and also gives only little description on the article. In order to view the article completely, refer the URL mentioned in the article attributes on the home page. The above limitations are due to Developer subscription. You can pay and upgrade the subscription at https://newsapi.org/pricing to avoid the limitations.

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Downloads:

## Download Node.js

https://nodejs.org/en/download/
Version: 8.12.0

Steps to run the application :

## Install Angular CLI 

Run `npm install -g @angular/cli` to install Angular CLI. 

## Clone the repository

Run `git clone <https/ssh link>` to clone the repository to your local computer

## Navigate to the repository on local machine.

Run `cd News-Org` to navigate to that folder.

## Install node modules

Run `npm install` to install the node modules

## Run the application on Development server

Run `ng serve` to run the app on a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
