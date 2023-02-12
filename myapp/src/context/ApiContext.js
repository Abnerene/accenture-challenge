import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { CATEGORIES } from '../services/settings'
export const ApiContext= createContext()

const POSTS = () =>{
    return JSON.parse(localStorage.getItem('posts'))
}


export default function ApiContextProvider(props){
    const [state,setState] = useState({})
    const [loading,setLoading] = useState(true)
    
    useEffect(() =>{
        // if(localStorage.getItem('posts')===null){
            setLoading(true)
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                
                let posts = response.data.map((post,index)=>{   
                    const p = Math.floor(Math.random() * CATEGORIES.length)                
                    post.category = CATEGORIES[ p === 0?1:p ]
                    return index < 12 ? post : false
                    }
                ).filter((value) => value)
                console.log(posts)
                
                localStorage.setItem('posts',
                JSON.stringify(posts)
                )

                setState(POSTS())
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
        // }

    
    },[])
   
        return (

            <ApiContext.Provider value={{state,loading}}>
                {props.children}
            </ApiContext.Provider>

        )
}