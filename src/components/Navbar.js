import React from "react"
import logo from '../images/reacticon.png'

export default function Navbar(){
    return (
        <nav>
            <img className = "nav_logo" src={logo}/>

            <h2 className = "nav_title"> React Facts </h2>

            <h3 className = "nav_desc"> React Course - Project 1</h3>
        </nav>
    )
}