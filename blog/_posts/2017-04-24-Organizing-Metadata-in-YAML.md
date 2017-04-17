---
title: Organizing Metadata in YAML
published: true
date: '2017-04-24 00:00:00 -0400'
tags:
  - YAML
  - Metadata
categories: Metadata Organization
---

I have organized a large amount of content into a YAML document. This will aid in the [contact automation](../Automating-Contracts) I was talking about before. For the encyclopedia project I am working on, there are topics and entries. The editors relay to me the author's information and what topic they will be writing about, which I am to cross-reference with a set of three documents. 

I have taken these three documents and condensed them into a 19,501 line YAML document. Here is an example of a single topic: 

{% highlight YAML %}

---
artnr: "1.001.A"
title: "Topic Example: Subtopic"
section: "Section Example"
special-attention: >
  Text describing the focus of the topic and entries. Text is often several sentences long. 

{% endhighlight %}

So, like, 3,000 of those.

The routing editor sends me a list of authors and the entries they are contributing to the encyclopedia. I can gather that information into another YAML entry:

{% highlight YAML %}

---
entry1601:
 authors:
  - Author Name
  - Second Author
 title: "Topic Example: Subtopic"
 email:
  - 123@fakeemail.wow
 special-attention: > 
  Text describing the focus of the topic and entries. Text is often several sentences long. 
 length: 5000
 due: 16 June 2017
 editor: aa


{% endhighlight %}

I'm pretty new to YAML syntax. I am hoping to group this metadata together and use it to automate the creation of and updates to:

- Contracts
- Letters of invitation from the general editor
- The master TOC file for each supplement to the encyclopedia
- Emails to contributors

