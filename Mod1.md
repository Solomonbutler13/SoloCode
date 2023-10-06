 ## Terminal Commands

PWD
* `pwd` - print working directory

CD

* `cd` - change directory
* `cd ..` - move up one directory
* `cd ../..` - move up two directories
* `cd ~` - move to home directory
* `cd /` - move to root directory

LS
* `ls` - list files

MKDIR
* `mkdir` - make directory

TOUCH
* `touch <filename>` - create file
* `touch .<filename>` - create hidden file

RM
* `rm <filename>` - remove file
* `rm -r <directory name>` - remove directory
* `rm -rf <directory name>` - remove directory without prompting

MV
* `mv <filename> <new filename>` - rename file
* `mv <filename> <directory name>` - move file to directory

Nano

* `nano <filename>` - open file in nano text editor
  + CTRL + X to exit
  + Y to save changes
  + Press enter to confirm (You're confirming the file name)

Cat

* `cat <filename>` - print file contents

Echo

* `echo "<content>" > <filename>` - create file with content
* `echo "<content>" >> <filename>` - append content to end of file

Code

* `code .` - open current directory in VS Code
* `code <filename>` - open file in VS Code
* `code <directory name>` - open directory in VS Code

## Git Commands

GIT INIT
* `git init` - initialize git repository
  + You can turn any folder into a git repository
* `git add .` - stage changes
  + `git add <file name>` - add specific file to stage
* `git commit -m "Commit message"` - commit changes
* `git push` - push changes to remote repository
* `git pull` - pull latest changes from remote repository
* `git status` - view current changes
* `git log` - view commit history
* ~~`git diff` - view line difference~~ We'll cover this later
* `git branch` - view current branch (Press Q to exit)

Branching Commands (We'll cover this later)
* `git checkout -b <branch name>` - create new branch
* `git checkout <branch name>` - switch to branch