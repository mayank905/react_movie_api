import React, {useEffect, useState} from 'react';
import "./Director.css";

function Director() {

    useEffect(()=>{fetchItems();},[]);

    const [items,setItems]=useState([]);
    const edit=async (e,id)=>{
        let editData=e
        console.log(editData)
        let getUrl='http://localhost:3002/api/directors/'+id

        let data =await fetch(getUrl,{method:'PUT',body: JSON.stringify(editData)})
        console.log("edit worked")
        let data1=await data.json();
        console.log(data1)
    }

    const fetchItems=async ()=>{
        let getUrl='http://localhost:3002/api/directors'
        let data =await fetch(getUrl);
        let data1=await data.json();
        console.log(data1)
        setItems(data1)
    }
    return (
        <div className="director" >
            {items.map(item=>(<h1 suppressContentEditableWarning={true} contentEditable={true} on onChange={(e)=>edit(e.target.value,item.id)} key={item.id}>{item.name}</h1>))}
        </div>
    )

}
export default Director;
