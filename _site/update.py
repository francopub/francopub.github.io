import os, time, re

message = raw_input('Write blog or another string: ')

if message == "blog":
	proj = raw_input("What is this week's project? ")
	rot = open('_includes/rotation.html')
	rot_contents = rot.read()
	rot = open('_includes/rotation.html', 'wb')
	content = '</i> current project: (.*?)</p>'
	replacement = '</i> current project: ' + proj + '</p>'
	rot_contents = re.sub(content, replacement, rot_contents)
	rot.write(rot_contents)
	rot.close()


today = str(time.ctime())

def update(msg):
	os.system("jekyll build")
	os.system("git add -A")
	os.system(msg)
	os.system("git push")

if message == 'blog':
	update("git commit -m 'Weekly update for " + today + "'")
	print("Blog post made for " + today + "!")

else:
	update("git commit -m '" + message + "'")
	print("Update to website made: " + message)


'''

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
'''



'''
digit = re.search(r'\[\d\]', rot_contents)
digit = int(digit.group(0)[1])

if digit == 9:
	digit = 0
elif digit >= 0:
	digit += 1

print digit

'''