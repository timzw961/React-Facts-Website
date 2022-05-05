# React Facts Website

I am trying to familiarise myself with using GitHub and GitHub pages with React. I wanted to originally just copy and paste my files into a repo in GitHub, but that doesn't really work if you used the normal "create react app" and try to copy and paste folders to the Repo. Instead, I've used the setup from this: https://github.com/gitname/react-gh-pages to get me started.

Learnings:
1) I can use GitHub pages to deploy the website from the project using the above linked installation and using npm run deploy after I've committed to main
2) After deploying a commit to the main, and also running npm run deploy again in CMD, it removes the readme file from the gh-pages branch
3) The website can be accessed here https://timzw961.github.io/React-Facts-Website/
4) Since the HTML files are the largest, I have to add a .gitattribute file to the main branch (in this case, I will need to make the master branch the default branch) and include *.html linguist-detectable=false so that it correctly displays the javascript language that is being used. I can safely change the default branch to the Master branch if I have completed these projects as I won't be using npm run deploy anymore to the gh-pages branch.

05/05/22
Taking a look back at this website, its pretty easy to forget about. I think I will try to update my github pages once in a while so they have some more recent facts or things. For example, I'll eventually add a bullet point here and there about react facts that might be cool that I have personally learnt
