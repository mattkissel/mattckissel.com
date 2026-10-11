+++
title = 'Crabs Galore'
date = 2026-10-10T11:04:45-04:00
draft = false 
#summary shows on list pages and on the portfolio
summary = 'A 2D Godot game on late stage crabitalism' 
#tags - searchable on the blog
tags = ["game design", "games", "crabs"] 
#categories - add "portfolio" to display this page on the portfolio 
categories = ["portfolio"] 
#skills involved in this project, will show up as badges on the portfolio
skills = ["Godot", "C#", "Game Design"]
#link to related github repository (if exists)
github = "" 
links = [
    # add external links as: {label = "Display Name", url = "https://example.com"}
    # {label = "GaijinSensei.com", url = "https://gaijinsensei.com/"},
]

+++

For a while now, I've been coming back to a game design side project of mine. It's called carcinizator. Its a online co-op, top-down shooter, rogue-like. If you're familiar, think in the vein of Crimsonland, maybe a bit of Brotato or Vampire Survivors. 

The story is simple, you live in late-state crabitalism. The most valuable thing in your world, the building blocks of your society... it's crabs all the way down. You know what? I don't really need to explain it; you can just watch the opening crawl for the game. It stutters a little bit because OBS does not record well when previewing a Godot animation.

{{< video  src="video/opening-crawl.webm" width="80%" >}}

If that's not enough to whet your appetite, here are some of the features implemented so far:

A whole cast of enemies
- Basic Melee 
- Ranged 
- Loot (If you catch them they drop a big ol' box o' loot)
- Egg Laying 
- Mine Dropping 
- Self-destructing 
- Trap Launching
- Swarming
- Berserking
- Tractor Beaming

Passive Abilities and Ability Combinations
- Slap + Punch =  Holy Palm
- Sickle + Staff = Scythe
- Rock + Rock + Rock + Rock + Rock + Rock = Boulder

Active Abilities
- Shield
- Guns Akimbo
- Flurry of Fists

Pickups
- Nuke (You'll notice too many of these drop in the preview video)
- Speed Up
- Bullet Powerups

Other Notable Features
- Shop to purchase guns and abilities
- Revival and downed system
- Status effects (Burn, Freeze, Bleed, etc)
- Unlocks (for guns and abilities)
- Crabgate (for teleporting)
- Movement abilities (Trampoline, Dash, Roll)

Here's a preview video (I'll add one with sound later). On the branch I was using to make this video, there's no balancing implemented. Many things have quick cooldowns for testing (the shotgun fires like a machine gun), and the explosion pickups are happening all the time. I tried to display as many of the features as possible in this short preview. 

{{< video  src="video/carcinizator-preview-wide.webm" width="80%" >}}
