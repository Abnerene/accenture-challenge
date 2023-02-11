import React from "react";
import './Navbar.css'
export default function Navbar(){
    const categories = ['All','Travelled','Lifestyle','Bussines','Food','Work']
    return (
        <nav className="filter-container">
            <ul>
                {categories.map( category => 
                    <li className="category-item">{category}</li>
                    )}
            </ul>
        </nav>
        
    )
}