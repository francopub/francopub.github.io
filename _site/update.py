import os, time, re

message = raw_input('Write blog or another string: ')

if message == "blog":
	proj = raw_input("What is this week's project? ")
	rot = open('_includes/rotation.html')
	rot_contents = rot.read()
	rot = open('_includes/rotation.html', 'wb')
	content = '</i> current project: (.*?) <i'
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
	print("Blog post made for " + today + " and this week project has been updated to read " + proj)

else:
	update("git commit -m '" + message + "'")
	print("Update to website made: " + message)