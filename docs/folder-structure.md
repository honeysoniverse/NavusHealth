# Folder structure

For this project we decided on the following folder structure:

## ROOT level

- cicd | folder with docker and nginx related files
- docs | Documentation for the project, mostly technical
- public | The public html folder
- src | The main folder where all the JavaScript files are located

## SRC level

Inside the /src folder we will follow some additional patterns for the folders and files. The main
folders inside the /src folder are:

- components
  - FormComponents | UI components used for building registration forms from json
- config | Configurations wider than 1 component
- hooks
- pages
  - Account
    - components
      - CustomComponent
        - CustomComponent.jsx
    - views
      - Main.jsx
    - Account.jsx | Configuration for this page, contains the routing for the nested routes
    - Any other file like constants.js or hooks.js
- services
  - forms | Api instance used for fetching forms
  - navPass | Api instance used for fetching navPass data (user data)
- store | Zustand stores
- theme | Theme properties
- utils | Utility functions
- validators | Additional/custom validators for the form
- Other files like index.jsx and App.jsx

## Rules & Guidelines
