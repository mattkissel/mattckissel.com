+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true 
#summary shows on list pages and on portfolio
summary = '{{ replace .File.ContentBaseName "-" " " | title }}' 
#tags - searchable on the blog, add "portfolio" to display this page on the portfolio 
tags = [] 
#categories - use the 'story' for custom story styling, not sure if it has other uses
categories = [] 
#tech stack involved in this project, will show up as badges on the portfolio
tech = []
#link to related github repository (if exists)
github = "" 
links = [
    # add external links as: {label = "Display Name", url = "https://example.com"}
    # {label = "GaijinSensei.com", url = "https://gaijinsensei.com/"},
]

+++
