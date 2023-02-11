import React, { useState } from 'react'
import axios from 'axios'

export const ApiContext= createContext()


export default function ApiContextProvider(props){
    const [statate,setState]= useState({})
        
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setState(response.data)
        })
        .catch(error => console.log(error))

        return (

            <ApiContext.Provider value={{statate}}>
                {props.children}
            </ApiContext.Provider>

        )
}