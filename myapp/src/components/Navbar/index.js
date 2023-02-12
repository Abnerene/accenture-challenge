import React from "react";
import { CATEGORIES } from "../../services/settings";
import './Navbar.css'

export default function Navbar(){
    return (
        <nav className="filter-container">
            <ul>
                {CATEGORIES.map( category => 
                    <li className="category-item">{category}</li>
                    )}
            </ul>
        </nav>
        
    )
}