---
date: '2017-04-17 00:00:00 -0400'
published: true
title: 'Sure, it took longer'
category: Workflow Automation
tags:
  - Python
  - Pandoc
  - Regular Expressions
---
I had 30 docx files, between 300 and 400 pages long, with random headings thrown in and also bolded text that is supposed to be a heading but is, of course, like most things in life, completely without style. 

My boss asked me to go through and apply heading 1 and heading 2 *only* to the bolded text "headings", and otherwise remove the stylings applied. That is a simple find and replace, sure, and of course, I'd have to use my best judgment to change some to H1, others to H2. (To be clear, we were both not pleased to have to do this and agreed that we should take steps in the future to avoid inconsistent styling and semantics).

So, I could've gone in and done this manually, opened each of the 30 files and done a find and replace and apply style. OR: 

![A photo of a python (the animal, not the programming language)](https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hatchling_Python_sebae_Tropicario%2C_FIN_2.jpg/320px-Hatchling_Python_sebae_Tropicario%2C_FIN_2.jpg)
**Python time! (The age of this python is a metaphor for my current abilities with the programming language. By Tigerpython (Own work) [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons)**

Sure, it took longer to make and run the script than it would've to have done it all manually (mostly because I made little errors). And sure, it's not a script I'll use a lot. But I learned a lot!

And of course, here's the script: 

