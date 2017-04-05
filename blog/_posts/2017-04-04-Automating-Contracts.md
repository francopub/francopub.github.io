---
date: '2017-04-03 00:00:00 -0400'
title: Automating contracts
tags:
  - LaTeX
  - Pandoc
  - docx
category: Workflow Automation
---

Currently working on automating contract generation. I have to juggle multiple authors and their contracts, so I thought it'd be better to automate them so I can prevent errors and make things a little simple. Ideal workflow:

- Receive info from routing editors, specifically
	- Author name
	- Author email address
	- Article title
	- Article abstract
	- Due date
	- Article word count
- Collect that info *somewhere* (YAML, an array, whatever)
- Run Python or some other kind of script to generate an email with a PDF attachment that is sent to the author

Of course, all of the work is between bullet 2 and 3.

Potential tools:

- Word
- Python
- Pandoc
- Texmaker

### Space

Right now I work in a Windows environment in a small, windowless office. Which is fine. But I've taken to bringing in my Macbook and setting myself up in the empty "visitor" office, which has windows and plants. When people have walked by, I've explained, "I do not have space on my normal desk for this extra computer, the multiple monitors and mice (I have dual monitors on my work machine) would confuse me, and I wanted to bring my Macbook in since I've already set up a development environment for working with Python on my Mac that I did not wish to replicate on my Windows machine." All of which is true, but very boring.

Spent a good deal of time trying to wrap my head around LaTeX, using TeXmaker, because these contracts need to be PDFs, and do I really want to go into the Word doc and save as PDF a dozen times?

At this point, yes. Trying to figure out LaTeX has been really tricky, most of all because I have an image (the company logo) that has to go on every page. I'd like this contract template to work for every contract we have.
