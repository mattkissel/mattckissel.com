+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
type = 'story'
summary = 'This is a short story about .....'
+++

This is some text 
{{< picturebook >}}
{{< figure 
    src="imgs/page1.jpg"
    alt="comic page1"
    link="/"
    caption="REPLACE_THIS"
    class="story-fig"
>}}

{{< /picturebook >}}