import React, {useEffect, useState} from 'react';
import "./Director.css";
import {Link} from "react-router-dom";

function Director() {

    useEffect(()=>{fetchItems();},[]);

    const [items,setItems]=useState([]);


    const fetchItems=async ()=>{
        let getUrl='http://localhost:3002/api/directors'
        let data =await fetch(getUrl);
        let data1=await data.json();
        console.log(data1)
        setItems(data1)
    }
    return (
        <div className="director" >
            {items.map(item=>
                (<div>
                    <h1 key={item.id}>{item.name}</h1>
                        <Link to={'/directors/'+item.id}>
                            <input className="button" type="submit" value="Edit"/></Link>
                </div>
                ))}
        </div>
    )

}
export default Director;
