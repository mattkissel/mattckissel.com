+++
title = 'Trivia Ticklers - The Phone Trivia Game'
date = 2026-04-21T23:55:45-04:00
draft = false
summary = 'A Phone Trivia Game in React that exports to a scoreboard'
tags = ['web design', 'react','trivia', 'portfolio']
categories = ['programming']
tech = ["React", "Vite", "IndexedDB"]
github = "https://github.com/mattkissel/trivia-ticklers"
links = [
    {label = "Scoreboard",    url = "https://trivia.mattckissel.com"},
    {label = "Trivia App",    url = "https://trivia-ticklers.vercel.app"}
]

+++

[Trivia Ticklers](https://trivia-ticklers.vercel.app/) is one of my latest projects. You might be thinking, "Oh cool, a mobile app that lets me play trivia with my friends!" Wrong.

Trivia Ticklers is imports a database of trivia and players and generates weekly matchups with a set of questions and lets you keep track of score. It is purpose built for a very specific type of trivia I play with some friends and family. Only the trivia master needs to use the [app](https://trivia-ticklers.vercel.app/) and everyone else just needs to answer their phone. 

All the data is stored locally, so don't go rogue and clear your cache, or at least export a backup of the data first. 

The game exports a scoreboard JSON file which is used in the [scoreboard site](https://trivia.mattckissel.com/).

There is much refactoring to be done, but this years trivia has already started so it will be at least 6 more weeks before any more work is done on the app.

I think the dream version of it would have a phone tree system where after a player is asked their questions, they would call the next person or group of people. Because as it is, the trivia master is a lot of work.