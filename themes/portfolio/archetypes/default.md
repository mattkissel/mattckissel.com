+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true 
#summary shows on list pages and on the portfolio
summary = '{{ replace .File.ContentBaseName "-" " " | title }}' 
#tags - searchable on the blog
tags = [] 
#categories - add "portfolio" to display this page on the portfolio 
categories = [] 
#skills involved in this project, will show up as badges on the portfolio
skills = []
#link to related github repository (if exists)
github = "" 
links = [
    # add external links as: {label = "Display Name", url = "https://example.com"}
    # {label = "GaijinSensei.com", url = "https://gaijinsensei.com/"},
]

+++
