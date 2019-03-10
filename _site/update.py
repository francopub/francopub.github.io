import os, time, re

message = input('Write blog, project, or another string: ')

def update(msg):
	os.system("jekyll build")
	os.system("git add -A")
	os.system(msg)
	os.system("git push")

if message == 'blog':
	today = str(time.ctime())
	update("git commit -m 'Weekly update for " + today + "'")
	print("Blog post made for " + today + "!")

elif message == 'project':
	proj = input("What is this week's project? ")
	rot = open('_includes/rotation.html')
	rot_contents = rot.read()
	rot = open('_includes/rotation.html', 'wb')
	content = '</i> current project: (.*?) <i'
	replacement = '</i> current project: ' + proj + ' <i'
	rot_contents = re.sub(content, replacement, rot_contents)
	rot.write(rot_contents)
	rot.close()
	update("git commit -m 'Current project changed to " + proj + "'")
	print("Project updated to " + proj)

else:
	update("git commit -m '" + message + "'")
	print("Update to website made: " + message)