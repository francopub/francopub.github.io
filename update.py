import os

def update():
	os.system("jekyll build")
	os.system("git add -A")
	os.system("git commit -m 'Weekly Blog Update'")
	os.system("git push")
	print("Job complete!")

update()