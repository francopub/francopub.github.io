---
date: '2017-04-10 00:00:00 -0400'
title: Yet another scheduling Jekyll posts post
tags:
  - Jekyll
  - Python
category: Workflow Automation
---
So I've been trying to research how to schedule these Jekyll blog posts so I am one of those great Internet unicorns that regularly updates their blog. If you don't know, Jekyll is very cool. It generates a static site from your computer, but it is pretty involved. 

But I like a project. I built this site over the span of a few months while I was facing an impending lay-off. You can see the source code here on [github](https://github.com/francofaa/francofaa.github.io). This site is being delivered straight from github in fact. 

But yes, as I said, it is very involved, for a very nice, light-weight pay-off. Blog posts and pages written in markdown, layout templates written in HTML and liquid syntax (which can use if/and statements and takes variables based on your site metadata and other things), and metadata written in very human-friendly YAML.

So one thing that Jekyll can't do is schedule posts. So I can't, say, write several posts and have them update on the days I want them to. I'd like this to update every Monday, but that's just not going to happen without some fun rigamarole. And if you'd like to get involved in that rigamarole, you can go to this [site](http://helentran.com/scheduling-posts) that explains it quite well. In fact, this is probably the best way to do it, but for some reason in the past several days I have not been able to wrap my mind around it. Probably lack of sleep.

Anyway, I'm going to try something like this:

{% highlight Python %}
$ jekyll build
$ git add -A
$ git commit -m "Weekly Blog Update"
$ git push

{% endhighlight %}