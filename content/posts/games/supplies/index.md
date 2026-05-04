+++
title = 'Supplies!'
date = 2026-04-25T00:07:29-04:00
draft = true 
#summary shows on list pages and on the portfolio
summary = 'The board game where you gather supplies to save yourself from being stranded at sea' 
#tags - searchable on the blog
tags = ["games", "crabs"] 
#categories - add "portfolio" to display this page on the portfolio 
categories = ["portfolio"] 
#skills involved in this project, will show up as badges on the portfolio
skills = ["Game Design", "Lua", "Tabletop Simulator", "Oatear Cider"]
#link to related github repository (if exists)
github = "" 
links = [
    # add external links as: {label = "Display Name", url = "https://example.com"}
    # {label = "GaijinSensei.com", url = "https://gaijinsensei.com/"},
]

+++

Supplies! is a board game that has been slowly in the making for awhile. My sister and I playtested the game when we made up the board, pieces and cards last year. But she lives far away, which would make playtesting a once or twice a year thing.

To remedy this I decided to make a prototype digital version that we could test online. I ended up choosing Tabletop Simulator (TTS). It has a few advantages:
    - It simulates like a real boardgame
        - we can find out if moving too many pieces is a pain 
        - most gameplay changes can happen by playing differently without needing to refactor code
    - The software used to make the game cards ([Oatear CIDEr](https://github.com/oatear/cider)) inherently exports to TTS card sheets
    - Most of my friends purchased it during the pandemic and so they can all join a multiplayer session

There were some issues with setting it up. 
    - The TTS docs weren't clear about all the available functions, so I tried to use AI which led me slightly astray. Claude would slip in a function which would finalize the board tiles, nullifying the tile variable and messing up all later references.
    - I spent a lot of time trying to figure out how to lock the position of board game tiles while still allowing them to flip. It's not necessary but it would make it easier to move pieces around the board.
    - CIDer's export for TTS was broken, so with a bit of Claude's help I found the offending part of the code and fixed it. After that, I realized someone had submitted a a fix for the same issue on the repo. 
    - My friend and I were easily distracted trying to geoguess the street shown in the background on TTS (It's in Gdańsk)


After all that it's fully playable and we have playtested it a few times. It's currently not released as it still needs a few large changes to the game mechanics. Even with a virtual version it can be hard to find a time to play that works for all timezones.

