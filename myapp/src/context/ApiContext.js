import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { CATEGORIES } from '../services/settings'
export const ApiContext= createContext()
const POSTS = JSON.stringify(localStorage.getItem('posts'))

export default function ApiContextProvider(props){
    const [state,setState] = useState({POSTS})
    const [loading,setLoading] = useState(true)
    useEffect(() =>{
        // if(localStorage.getItem('posts')===null){
            setLoading(true)
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                
                response.data.forEach(post=>{
                    post.category = CATEGORIES[ Math.floor(Math.random() * CATEGORIES.length) ]
                })

                localStorage.setItem('posts',
                JSON.stringify(response.data)
                )

                setState(response.data)
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