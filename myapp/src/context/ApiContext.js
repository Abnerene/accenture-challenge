import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const ApiContext= createContext()


export default function ApiContextProvider(props){
    const [state,setState] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(() =>{
        setLoading(true)
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setState(response.data)
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