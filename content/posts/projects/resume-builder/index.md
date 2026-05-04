+++
title = 'Resume Builder'
date = 2026-05-04T00:02:33-04:00
draft = false 
#summary shows on list pages and on the portfolio
summary = 'A vanilla JS resume builder, to export various resumes with varying styles' 
#tags - searchable on the blog
tags = ["Web Design"] 
#categories - add "portfolio" to display this page on the portfolio 
categories = ["portfolio"] 
#skills involved in this project, will show up as badges on the portfolio
skills = ["HTML","JavaScript", "CSS", "Web Design"]
#link to related github repository (if exists)
github = "https://github.com/mattkissel/resume-builder" 
links = [
    # add external links as: {label = "Display Name", url = "https://example.com"}
    {label = "Builder with Example Content", url = "https://mattkissel.github.io/resume-builder/example-content-resume-builder.html"},
    {label = "Example Resume", url = "https://mattkissel.github.io/resume-builder/resumes/example-resume.html"},
]

+++

The [Resume Builder](https://github.com/mattkissel/resume-builder) was a project I built a long time ago to make a principal or master resume that could easily export different resumes in different styles. There were a few ideas in mind when I started this project. Namely, it needed to work fully offline, you could easily choose what to export by toggling pieces of the resume on and off, and you could export to html or pdf.

I went back to update it recently, because what better way to refresh the HTML version of my resume than to make an entire project about resume building. In the interest of updating it, a few things "had" to happen:  
- I removed the old jQueryUI code and added in [Sortable.js](https://sortablejs.github.io/Sortable/), it works better and is more lightweight.
- Change the html template system to a system using js files to avoid CORS errors when offline
- Do the same for CSS files to allow dynamically changing the CSS on the builder
- Switch to using a shadow DOM for the resume preview contained within the resume builder. This seemed like a cool idea at the time, but I'm not sure it added enough benefit to outweigh the inconvenience.
- Remove all private info for deploying to a public repo.
- Remove the outdated export to PDF since in browser functionality is more reliable.
- Finally, fix the element controls to prevent accidentally deleting them due to the controls being inside a "contenteditable" element.


After doing all this, I'm not really sure that I want to post an HTML version of my resume on my site anymore. LinkedIn exists and employeers won't come looking at my portfolio for my resume. But the builder is still useful to store all resume content and export different variations (e.g. one resume for software development jobs, one for IT support, one for teaching, etc.).

There's still bits and pieces of the builder to polish so I'll probably fix those pieces as I export resumes for different jobs.



Links to check out the project: 
- [The Builder](https://mattkissel.github.io/resume-builder/) - you will need to download the whole repo in order save a master resume and use it locally.
- [Github Repo](https://github.com/mattkissel/resume-builder)
- [Builder with example content](https://mattkissel.github.io/resume-builder/example-content-resume-builder.html)
- [Example exported resume](https://mattkissel.github.io/resume-builder/resumes/example-resume.html)