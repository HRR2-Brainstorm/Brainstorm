[![Stories in Ready](https://badge.waffle.io/HRR2-Brainstorm/Brainstorm.png?label=ready&title=Ready)](https://waffle.io/HRR2-Brainstorm/Brainstorm)
Brainstorm
==========

HR-Brainstorming app

This app is built to make the process of brainstorming and idea sharing within Hack Reactor easier

It leverages React, Flux, and Socket.io to create a truly seamless user and responsive user experience

##Interested in Contributing?

Please review [CONTRIBUTING.md](CONTRIBUTING.md)

###App Gulp Tasks

serve index.js with nodemon (page will reload on server and client files changes)

`gulp`

run *client side* tests automatically whenever files change

`gulp karma-auto`

run server side tests one time

`npm test`

set up automatic jsx compiling on save:

first install react tools if you have not already (may need to run as sudo)

`npm install -g react-tools`

then run from the root of the application

`gulp jsx-auto`
