import React from "react"

export default function Main(){
    return (
        <main>
            <h1 className = "main_heading"> Fun facts about React </h1>
            <ul className = "main_list1">
                <li> Was first released in 2013 </li>
                <li> Was originally created by Jordan Walke </li>
                <li> Has well over 100k stars on GitHub </li>
                <li> Is maintained by Facebook </li>
                <li> Powers thousands of enterprise apps, including mobile apps </li>
                <li> <a href ="https://create-react-app.dev/docs/getting-started/" >Create React App</a> 
                is an "easy" way of starting your first React Applications.  </li>
                <li> 
                    Trying to simply copy and paste the React App folder created from the "create react app" quick start guide into
                    a GitHub repository doesn't work as you may have thought. 
                </li>
                <li> 
                    You will also need to do some further <a href="https://github.com/gitname/react-gh-pages"> installation</a>. 
                    These extra steps will also allow you to deploy your website to a GitHub Page! So you can show off your website that you've
                    created on a GitHub repository, and also by using a GitHub Page. 
                </li>

            </ul>
        </main>
    )
}