import React from "react";
import { CATEGORIES } from "../../services/settings";
import './Navbar.css'

export default function Navbar({filter,setFilter}){
    

    return (
        <nav className="filter-container">
            <ul>
                { CATEGORIES.map( category => 
                    <li onClick={()=> setFilter(category)  } className={`category-item ${category === filter? 'active':'' }`}>
                        {category}
                    </li>
                  
                  )}
            </ul>
        </nav>
        
    )
}