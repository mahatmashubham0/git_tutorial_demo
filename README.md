test project
What is Git and Github?
Ans: GIT: Git is a distributed version control system used to manage and track changes in files, typically source code, during software development. It allows multiple developers to collaborate on a project simultaneously.

GITHUB: GitHub is a web-based platform that hosts Git repositories, providing version control and collaboration tools for software development. It builds on Git by adding features like issue tracking, code review, and project management, making it easier for developers to collaborate on projects.

• Git manages version control locally.
• GitHub provides a platform to share, collaborate, and manage Git repositories online.



First create the folder 
mkdir folder_name

Delete the folder
Rm -rf folder_name


Check how many files and folder contain in the root folder
Ls , ls -a (Using Which We can is hidden folder and files in root folder)

Want to create the new file in folder
touch index.js
Linux provide the Vim editor (vim index.js) here we can write some text on the index.js file to move out from vim editor (press esc button :wq)

Create the new version
Git init 
starting here git does not track any file and when we add the index.js file then it start to track 

Add the file in git to commit
Git add index.js || git add . (add All files in git)

Important point 
Git commit means create the new version of your code
 
New Version                                                           New Commit
If We don’t add the file in git so git show the message of untrack file and when we add it and then git show the msg of changes to be commited

Once all find add on git then commit file means create the new version
Git commit -m "added the file in git"

If we want to show the data of the file
cat index.js || cat config.js

Want to add the project in git hub so follow this 
Git remote add origin https://github.com/mahatmashubham0/git_tutorial_demo.git

So here we want to add git data remote to this url and we refer this url  a origin
Here origin is name of this url and we want to add the data on this url so we take reference of origin

Git push origin(name of above url) master

How Git Internally works?
Internally git is <Key , value>

Git internally store data as key and value form so key size should be a 40dexadecimal size and data store as Blob form according the key

As we know we run the git init command so git create the .git folder in this folder has multiple folder .
So there is one folder is objects that folder has multiple files (ye file project ke undr vali files hoti hain)

How to update the previous commit?
Git commit --amend 
This is command using which we can update the previous commit

Whenever we write the code it can line in the one of the following.

	1. Working Area
	2. Staging Area
	3. Repo

We create the folder in which we created the two file test1 and test2 and one file we run the git add test1.js 
So before the git add test1.js it is present on the working area and after the git add . It move to the staging area

When we done the git add test1.js and after that we perform some changes in the test1.js file and do the git commit -m "" command so we got the spanshort of previous file data before changes vala in test1.js file.

And we want perform the changes in file after the git add . So we got previous data by using this command
Git restore test1.js







