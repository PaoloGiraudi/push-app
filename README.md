# Push App

_"I use Push App to keep track of my pushups."_

-Paolo, 2021

## Description

Push App is built using React Router.

The add-pushups-page is hidden and only the admin (me) can add a new session.

I use Firebase for the `auth()` process.

I store the pushups sessions in a Firestore database.

When I add a session, I use `batch()` to update a 'total' counter too.

In this way, the app reads a single data instead of fetching the entire database.

<img src="https://i.imgur.com/3hMvnwr.gif" width="30%" height="30%" />

## Follow my intense gym routine here

[Push App](https://paologiraudi.github.io/push-app/#/)
