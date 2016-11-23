---
date:   2016-11-22 13:24:17 -0400
title: Crimson Romance
subtitle: Ebook series with script based workflow
permalink: /projects/CrimsonRomance
---
Crimson Romance is the romance line at Adams Media. This is an ebook-first series. For this series, I helped with a transition to a CMS-based workflow. 

![Library of Crimson Romance ebooks](crimsonlibrary)

Due to the quick turnaround with this series, I was presented with an interesting challenge. The CMS filled in the metadata fields for the EPUB export; however, since the content was outpacing the metadata for this fast-paced workflow, I had to enter in that information manually: the cover, author name, title, and ISBN. Initially, I set up a set of regexes that I would run upon opening the files, but eventually I created a Python script. The script is available [here on github][RomanceEPUBCleanUp].

[RomanceEPUBCleanUp]: https://github.com/francofaa/RomanceEPUBCleanup
[crimsonlibrary]: https://