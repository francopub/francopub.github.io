---
date: '2017-05-01 00:00:00 -0400'
title: Project Rotation
category: Time Management
tags:
  - Python
  - Jekyll
  - Meta
---

I have extra-curricular projects I like to work on, in additon to projects at work where I am a project manager and my freelance projects (which I am careful to make sure are never a conflict of interest, in case you were wondering). The projects can include any of the following:

- Web design and development
- Book layout and design
- Editing my novel

In addition, I like to work on other stuff, like the following (most of it is just learning new things): 

- Single source / multiple output book production
- Learning Python beyond publishing
- Learning songs on guitar

Hard to prioritize day by day, so I've decided to prioritize week to week. I will be setting aside my down time to these particular projects. And I'll be displaying the project on the landing page of the blog.

I've set up the area for it on the blog's main page in a Jekyll include. A file in my includes folder is called rotation.html, which contains this HTML partial:

{% highlight HTML %}

<p class="center"><i class="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i> current project: editing novel <i class="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i></p>

{% endhighlight %}

Merely include the following line in the blog/index.html file: 

{% highlight HTML %}

<header role="banner" class="site-header">
	<h1>
		Too Many Projects!
	</h1>
	<p class="tag-line">
			a process blog
		</p>
	<h2>Wherein I write about developing projects</h2>
</header>
\{% include rotation.html %\}
\{% include blog-roll.html %\}

{% endhighlight %}

I then created a Python script to help with updates. I am prompted to first describe the type of update I am making to the website.

If it is 'project', I am then prompted to describe the current project I am working on, say, "updating main website", and that will be placed in the include file, so that the text now reads: 

{% highlight HTML %}

<p class="center"><i class="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i> current project: updating main website<i class="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i></p>

{% endhighlight %}

