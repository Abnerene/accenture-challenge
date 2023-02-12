import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { CATEGORIES,POSTS } from '../services/settings'
export const ApiContext= createContext()


export default function ApiContextProvider(props){
    const [state,setState] = useState(POSTS())
    const [loading,setLoading] = useState(true)
    
    useEffect(() =>{
        
            setLoading(true)    
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if(Object.entries(state).length === 0){
                    let posts = response.data
                        .filter((post,index) => index < 12)
                        .map((post,index)=>{   
                            const p = Math.floor(Math.random() * CATEGORIES.length)                
                            post.category = CATEGORIES[ p === 0?1:p ]
                            return post
                        }
                    ).filter((value) => value)
                    // console.log(posts)
                    
                    localStorage.setItem('posts',
                    JSON.stringify(posts)
                    )
                }

                setState(POSTS())
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
       

    
    },[])

   
        return (

            <ApiContext.Provider value={{state,loading}}>
                {props.children}
            </ApiContext.Provider>

        )
}
