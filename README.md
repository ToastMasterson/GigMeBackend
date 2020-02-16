# GigMeBackend

Welcome!

I have previously built a prototype to this platform that I was unhappy with, so I am going to rebuild it with better code.

If you want to test my progress you can fork this repo and clone it locally.

open the cloned directory in your editor and from the terminal run:
 npm install
 npm start

you should then be able to make HTTP requests to the API successfully.

I will update as I keep building.

Thank you and enjoy!

-Tyler CW Masterson

///Current Log///

1/26/20
Users:
    Eventually there will be two sets of users.  Artists and Booking Agents.
    The full app exprience truly belongs to the Artists, however.

    I quickly constructed a schema for Artist Users and their profiles and contact lists

    Previously I stacked most of a user's information into one table, including all of their profile information, music, and photos/videos

    This time I will be separating each into it's own table.

    For the purposes of sticking with thin vertical slices, I will simply need a user to log in, fetch their profile info, and load a page displaying some of that data.

    I'm using Node.js with Knex, Express, Objection and PostgreSQL (heroku)

    after migrating the tables to the schema, I quickly coded the model files for each table, and created basic CRUD controller actions for each model.

    So far I can get, post, patch and delete artists, their profiles and their contact information.

