---
date:   2016-10-07 13:24:17 -0400
title: Crimson Romance
subtitle: Ebook series with script-based workflow, 2013-2016
permalink: /projects/CrimsonRomance
imgfolder: crimsonromance
categories: ebook design, workflows
tagline: A streamlined ebook-first workflow
---
Crimson Romance is the romance line at Adams Media. This is an ebook-first series. For this series, I helped with a transition to a CMS-based workflow. I was the sole developer on this series during my time at F+W Media, with 2 to 3 titles being published per week.

![Library of Crimson Romance ebooks](crimsonlibrary)

Due to the quick turnaround with this series, I was presented with an interesting challenge. The CMS filled in the metadata fields for the EPUB export; however, since the content was outpacing the metadata for this fast-paced workflow, I had to enter in that information manually: the cover, author name, title, and ISBN. Initially, I set up a set of regexes that I would run upon opening the files, but eventually I created a Python script. The script is available [here on github][RomanceEPUBCleanUp]. 

It's also down here:

{% highlight python linenos %}
import re, zipfile, os, shutil

##Enter in author name first. Since there are so many variations on first and last names (and since we need author names in both first name first and first name last) I thought an input might work better
firstName = raw_input('Author\'s first name: ')
print(firstName)
lastName = raw_input('Author\'s last name: ')
print(lastName)

# set our directory to the current one where the python script lives
bookFolder = os.getcwd()

# This locates our epub file, no matter what it is called. Sometimes the CMS calls it not\_named.epub, but sometimes I download more than one at a time so they are even more unhelpfully titled things like not\_named(1) and not\_named(2), so we can assign the only epub in this folder the variable foul.

for file in os.listdir(bookFolder):
	if file.endswith('.epub'):
		foul = file

# our cover file should also be in this directory (Crimson Week number directory)
# this finds the cover file, which should contain the ISBN and puts it in a var called isbn that removes the jpg extension. We'll be needing the ISBN a lot so it's good to define it now
for file in os.listdir(bookFolder):
	if file.endswith('.jpg'):
		isbn = os.path.splitext(file)[0]

# this creates the directory named isbn to which we'll extract our epub content we got out of the foul epub
os.mkdir(isbn)
zip_ref = zipfile.ZipFile(foul, 'r')
zip_ref.extractall(isbn)
zip_ref.close()

# this var will place us in the correct folder for the next edits
epub_folder = os.path.join(bookFolder + '/' + isbn)
oebps_folder = os.path.join(epub_folder + '/OEBPS')

# this will rename our cover image to cover.jpg  and set up a variable so that we can copy coverImg over the blank placeholder cover image
os.rename(isbn + '.jpg', 'cover.jpg')

for file in os.listdir(bookFolder):
	if file.endswith('.jpg'):
		coverImg = file

# this copies over our placeholder image
shutil.copy(coverImg, oebps_folder + '/images')

#This names it back
os.rename('cover.jpg', isbn + '.jpg')

# REGEXES #

# OPF

opf = open(oebps_folder + '/content.opf')
opf_contents = opf.read()
opf = open(oebps_folder + '/content.opf', 'wb')

# Get rid of new lines
opf_contents = opf_contents.replace('\r', '')
opf_contents = opf_contents.replace('\r', '')
opf_contents = opf_contents.replace('  ', ' ')

## Spine regex

spine_regex = '<spine toc="ncx" page-progression-direction="ltr">\n<itemref idref="toc" />\n <itemref idref="(.*?)" />\n <itemref idref="(.*?)" />'
spine_subst = r'<spine toc="ncx" page-progression-direction="ltr"><itemref idref="cover" linear="yes" /><itemref idref="\1" /><itemref idref="\2" /><itemref idref="newsletter" /><itemref idref="toc" />'
opf_contents = re.sub(spine_regex, spine_subst, opf_contents)

## metadata regex 

metadata_regex = '<dc:identifier id="bookid"></dc:identifier>\n<dc:date>(.*?)</dc:date>\n<dc:rights></dc:rights>'
metadata_subst = r'<dc:date>\1</dc:date><dc:identifier id="bookid">' + str(isbn) + r'</dc:identifier><dc:creator id="mainauthor1">' + str(firstName) + ' ' + str(lastName) + r'</dc:creator><meta refines="#mainauthor1" property="role" scheme="marc:relators">aut</meta><meta refines="#mainauthor1" property="file-as">' + str(lastName) + r', ' + str(firstName) + r'</meta><meta refines="#mainauthor1" property="display-seq">1</meta><dc:publisher>Adams Media</dc:publisher><dc:rights>WORLD</dc:rights>'
opf_contents = re.sub(metadata_regex, metadata_subst, opf_contents)

opf.write(opf_contents)
opf.close()

# NAV.XHTML

nav = open(oebps_folder + '/nav.xhtml')
nav_contents = nav.read()
nav = open(oebps_folder + '/nav.xhtml', 'w')

nav_regex = r'<ol class="epub_landmarks" epub:type="list">'
nav_subst = r'<ol class="epub_landmarks" epub:type="list">\n<li><a epub:type="cover" href="cover.xhtml">Cover</a></li>'
nav_contents = re.sub(nav_regex, nav_subst, nav_contents)

nav.write(nav_contents)
nav.close()

# NCX 
ncx = open(oebps_folder + '/toc.ncx')
ncx_contents = ncx.read()
ncx = open(oebps_folder + '/toc.ncx', 'w')

ncx_regex = r'<meta name="dtb:uid" content="" />'
ncx_subst = r'<meta name="dtb:uid" content="' + str(isbn) + r'" />'
ncx_contents = re.sub(ncx_regex, ncx_subst, ncx_contents)

ncx.write(ncx_contents)
ncx.close()

# zip it up and zip it out!

## This groups all of the files and folders inside of a folder into a zip file; we cycle through all the files, first making sure that they are not hidden files by eschewing files that start with '.'
def build_epub(epub_name, dir):
	dir_length = len(dir.rstrip(os.sep)) + 1
	with zipfile.ZipFile(epub_name, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
		for dirname, subdirs, files in os.walk(dir):
			for filename in files:
				if not filename.startswith('.'):
					path = os.path.join(dirname, filename)
					entry = path[dir_length:]
					zf.write(path, entry)

# store the folder's name in this var
bookFolderName = os.path.split(bookFolder)[1]

#call that function and adhere to naming conventions
build_epub(isbn + '_' + bookFolderName + '.epub', epub_folder)

#folder cleanup
os.remove(foul)
shutil.rmtree(isbn)

{% endhighlight %}

[RomanceEPUBCleanUp]: https://github.com/francofaa/RomanceEPUBCleanup
[crimsonlibrary]: https://

[crimsonlibrary]: ../../img/crimsonromance/1-library.jpg