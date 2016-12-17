---
date: '2016-10-07 13:24:17 -0400'
title: Crimson Romance
subtitle: Ebook series with script-based workflow, 2013–2016
permalink: /projects/CrimsonRomance
imgfolder: crimsonromance
project_type: Python, Ebook development
---

### Summary

Crimson Romance is the romance line at Adams Media. This is an ebook-first series. For this series, I helped with a transition to a CMS-based workflow. I was the sole developer on this series during my time at F+W Media, with 2 to 3 titles being published per week.

### Role

Developer

### Skills Used

- Python
- RegEx
- EPUB3
- CMS development
- CSS
- XML
- XHTML

### Description

![Library of Crimson Romance ebooks](../../img/crimsonromance/1-library.jpg)

Due to the quick turnaround with this series, I was presented with an interesting challenge. The CMS filled in the metadata fields for the EPUB export; however, since the content was outpacing the metadata for this fast-paced workflow, I had to enter in that information manually: the cover, author name, title, and ISBN. Initially, I set up a set of regexes that I would run upon opening the files, but eventually I created a Python script. The script is available [here on github](https://github.com/francofaa/RomanceEPUBCleanup). 

It's also down here:

{% highlight Python %}

import re, zipfile, os, shutil

firstName = raw_input('Author\'s first name: ')
print(firstName)
lastName = raw_input('Author\'s last name: ')
print(lastName)

bookFolder = os.getcwd()

for file in os.listdir(bookFolder):
	if file.endswith('.epub'):
		foul = file

for file in os.listdir(bookFolder):
	if file.endswith('.jpg'):
		isbn = os.path.splitext(file)[0]

os.mkdir(isbn)
zip_ref = zipfile.ZipFile(foul, 'r')
zip_ref.extractall(isbn)
zip_ref.close()

epub_folder = os.path.join(bookFolder + '/' + isbn)
oebps_folder = os.path.join(epub_folder + '/OEBPS')

os.rename(isbn + '.jpg', 'cover.jpg')

for file in os.listdir(bookFolder):
	if file.endswith('.jpg'):
		coverImg = file

shutil.copy(coverImg, oebps_folder + '/images')

os.rename('cover.jpg', isbn + '.jpg')

opf = open(oebps_folder + '/content.opf')
opf_contents = opf.read()
opf = open(oebps_folder + '/content.opf', 'wb')

opf_contents = opf_contents.replace('\r', '')
opf_contents = opf_contents.replace('\r', '')
opf_contents = opf_contents.replace('  ', ' ')

spine_regex = '<spine toc="ncx" page-progression-direction="ltr">\n<itemref idref="toc" />\n <itemref idref="(.*?)" />\n <itemref idref="(.*?)" />'
spine_subst = r'<spine toc="ncx" page-progression-direction="ltr"><itemref idref="cover" linear="yes" /><itemref idref="\1" /><itemref idref="\2" /><itemref idref="newsletter" /><itemref idref="toc" />'
opf_contents = re.sub(spine_regex, spine_subst, opf_contents)

metadata_regex = '<dc:identifier id="bookid"></dc:identifier>\n<dc:date>(.*?)</dc:date>\n<dc:rights></dc:rights>'
metadata_subst = r'<dc:date>\1</dc:date><dc:identifier id="bookid">' + str(isbn) + r'</dc:identifier><dc:creator id="mainauthor1">' + str(firstName) + ' ' + str(lastName) + r'</dc:creator><meta refines="#mainauthor1" property="role" scheme="marc:relators">aut</meta><meta refines="#mainauthor1" property="file-as">' + str(lastName) + r', ' + str(firstName) + r'</meta><meta refines="#mainauthor1" property="display-seq">1</meta><dc:publisher>Adams Media</dc:publisher><dc:rights>WORLD</dc:rights>'
opf_contents = re.sub(metadata_regex, metadata_subst, opf_contents)

opf.write(opf_contents)
opf.close()

nav = open(oebps_folder + '/nav.xhtml')
nav_contents = nav.read()
nav = open(oebps_folder + '/nav.xhtml', 'w')

nav_regex = r'<ol class="epub_landmarks" epub:type="list">'
nav_subst = r'<ol class="epub_landmarks" epub:type="list">\n<li><a epub:type="cover" href="cover.xhtml">Cover</a></li>'
nav_contents = re.sub(nav_regex, nav_subst, nav_contents)

nav.write(nav_contents)
nav.close()

ncx = open(oebps_folder + '/toc.ncx')
ncx_contents = ncx.read()
ncx = open(oebps_folder + '/toc.ncx', 'w')

ncx_regex = r'<meta name="dtb:uid" content="" />'
ncx_subst = r'<meta name="dtb:uid" content="' + str(isbn) + r'" />'
ncx_contents = re.sub(ncx_regex, ncx_subst, ncx_contents)

ncx.write(ncx_contents)
ncx.close()

def build_epub(epub_name, dir):
	dir_length = len(dir.rstrip(os.sep)) + 1
	with zipfile.ZipFile(epub_name, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
		for dirname, subdirs, files in os.walk(dir):
			for filename in files:
				if not filename.startswith('.'):
					path = os.path.join(dirname, filename)
					entry = path[dir_length:]
					zf.write(path, entry)

bookFolderName = os.path.split(bookFolder)[1]

build_epub(isbn + '_' + bookFolderName + '.epub', epub_folder)

os.remove(foul)
shutil.rmtree(isbn)

{% endhighlight %}
