A simple and lightweight clipboard history manager

## Table of Contents

- [Tech Stack](#tech-stack)
- [Description of Key Parts of Project](#key-parts)
  - [Client Folder Structure](#client-folder-structure)
- [Future Features](#future-features)

## Tech Stack

This project was built with the following:

- `Vue` for the frontend
- 'Electron' for the framework

## Screenshots

**_Main Dropdown_**
The application has one main dropdown to keep it simple. The dropdown can also be resized if you need to view long entries 

<!-- ![Main](https://shane-lupton.com/img/aliclips.789a7022.png) -->

## Description of Key Parts of Project

AlligatorClips uses Electron as the foundation of the project which enables access to the system clipboard.
When a new selection is copied, it is then added to the history. Clicking on a previous entry will ready it to be pasted again

### Client Folder Structure

```

  icon/
    crocodile.png
    crocodile@1.5x.png
    crocodile@2x.png
    rocodile@4x.png
  index.html
  LICENSE.md
  main.js
  package-lock.json
  package.json
  README.md
  renderer.js
  styles.css
  
```

## Future Features

- Add local database to keep history between restarts
- Add online database to sync history between devices

