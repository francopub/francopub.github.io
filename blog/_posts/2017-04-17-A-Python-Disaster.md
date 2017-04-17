---
date: '2017-04-17 00:00:00 -0400'
published: true
title: A Python Disaster
category: Workflow Automation
tags:
  - Python
  - Pandoc
  - Regular Expressions
---
I had 30 docx files, each between 300 and 400 pages long (so between 9,000 and 12,000 pages total), with random headings thrown in and also bolded text that is supposed to be a heading but is, of course, like most things in life, completely without style. 

My boss asked me to go through and apply heading styles *only* to the bolded text, and otherwise remove the stylings applied.

So, I could've gone in and done this manually, opened each of the 30 files and done a find and replace and apply style. OR: 

![A photo of a python (the animal, not the programming language)](https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hatchling_Python_sebae_Tropicario%2C_FIN_2.jpg/320px-Hatchling_Python_sebae_Tropicario%2C_FIN_2.jpg)
**Python time! (The age of this python is a metaphor for my current abilities with the programming language. By Tigerpython (Own work) [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons)**

It took longer to make and run the script than it would've to have done it all manually (mostly because I made little errors). 

And here's the script:

{% highlight Python %}

import os, pypandoc, re

curDir = os.getcwd()

for file in os.listdir(curDir): 
	if file.endswith('.docx'):
		fileName = os.path.splitext(file)[0]
		output = pypandoc.convert_file(file, 'md', outputfile= fileName + "-FA.md")
		print file + " has been converted to markdown"
        #left myself console notes so I knew where I was; 
        #like I said, this script took a really long time to run

for mdFile in os.listdir(curDir): 
	if mdFile.endswith('.md'):
	    #now we have our markdown files,
    	#which are a little easier to parse than docx
		mdFileName = os.path.splitext(mdFile)[0]
		mdFile_opened = open(mdFile)
		mdFile_contents = mdFile_opened.read()
		mdFile_opened = open(mdFile, 'w')
		regex = "\n\*\*(.*?)\*\*\n"
		subst = r"\n# \1\n"
		mdFile_contents = re.sub(regex, subst, mdFile_contents)
        #replace bolded text on its own line
        #with h1's on their own lines
		mdFile_opened.write(mdFile_contents)
		mdFile_opened.close()
		print "Headings inside of " + mdFile + " adjusted!"
        
		revertdocx = pypandoc.convert_file(mdFile, 'docx', outputfile= mdFileName + ".docx")
		print mdFile + "converted back to DOCX"


{% endhighlight %}

Not sure where it goes wrong, but it does go wrong. It ran for 20 minutes (thankfully giving me updates of its process due to the helpful print to console commands I put in there). After the script stalled out on one of the files, I stopped and went with a manual approach. It was actually faster than I thought find/replacing on bold and applying H1, and then promoting and demoting headings to appropriately nest them. Only took like 10 hours. No big deal. Most of that time was spent wondering whether something was a sub-section of another.

Moral of the story: Make authors and editors determine heading hierarchy.