import os, time

message = raw_input('Blog post or Standard Update: ')

today = str(time.ctime())

def update(msg):
	os.system("jekyll build")
	os.system("git add -A")
	os.system(msg)
	os.system("git push")
	print("Job complete!")

if message == 'blog':
	update("git commit -m 'Weekly update for " + today + "'")
else:
	update("git commit -m '" + message + "'")


	