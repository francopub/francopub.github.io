import os, time

today = str(time.ctime())

def update():
	os.system("jekyll build")
	os.system("git add -A")
	os.system("git commit -m 'Weekly update for '" + today + "'")
	os.system("git push")
	print("Job complete!")

update()