+++
title = "Fancy Portfolio"
date = 2026-04-24T01:45:41-04:00
draft = false
summary = "A fancy portfolio that grabs posts from a blog and freshens things up a bit"
tags = ["web design"] 
categories = ["portfolio"] 
skills = ["Next.js", "React", "Tailwind CSS", "TypeScript"]
github = "https://github.com/mattkissel/fancy-portfolio" 
links = [
    {label = "This site you're currently on", url = "https://portfolio.mattckissel.com/"},
]
+++

This blog wasn't really looking hip enough to be a cool portfolio, so with a quick Claude chat and a little elbow grease I threw together a prettier site to show off development projects.

The fancy portfolio uses Next.js and Tailwind.css. Next.js was used for a few reasons, firstly, it's good practice. Secondly. using incremental static regeneration (ISR) is nifty and it's something I haven't done before. The fancy portfolio is set to revalidate and refresh it's cache every hour. Lastly vercel is pretty easy for deployment and if I decide to add new and crazy things to the fancy portfolio, Next.js gives me a lot of options.

As of this post, the next steps for fancy portfolio are:
 - fix up the styling a bit
 - add a resume

Check out the site [here](https://portfolio.mattckissel.com/)