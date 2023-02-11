import React from "react";

export default function Post({value}){

    return (
        <div className="bg-[url('https://c8.alamy.com/compes/ddf21r/hdr-imge-de-chateau-de-chillon-ddf21r.jpg')]">
            <h1>{value.title}</h1>
        </div>
    )
}