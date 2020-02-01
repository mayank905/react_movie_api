import React,{useState,useEffect} from 'react';
import "./editDirector.css";
import {Link} from 'react-router-dom'

function EditDirector(match) {

    useEffect(()=>{fetchItems();},[]);

    const [items,setItems]=useState([]);

    const edit=async(data,id)=>{
        let editData={"name":data};

        let getUrl='http://localhost:3002/api/directors/'+id

        let data1 =await fetch(getUrl,{method:'PUT',headers: {
                'Content-Type': 'application/json',
            }
            ,body: JSON.stringify(editData)})
        console.log("edit worked")
        console.log(data1)

    }
    const add=async(data)=>{
        console.log(data)
        let editData={"name":data};
        let getUrl='http://localhost:3002/api/directors';
        let data1 =await fetch(getUrl,{method:'POST',headers: {
                'Content-Type': 'application/json',
            }
            ,body: JSON.stringify(editData)})
        console.log("post worked")
        console.log(data1)
    }
    const Delete=async(id)=>{
        let getUrl='http://localhost:3002/api/directors/'+id
        let data1 =await fetch(getUrl,{method:'DELETE',headers: {
                'Content-Type': 'application/json',
            }
           })
        console.log("delete worked")
        console.log(data1)
    }

    const fetchItems=async ()=>{
       // console.log(match.match.params.id)
        let getUrl='http://localhost:3002/api/directors/'+match.match.params.id;
        let data =await fetch(getUrl);
        let data1=await data.json();
        setItems(data1[0])
    }
    return (
        <div className="movie">
            <h1  suppressContentEditableWarning={true} contentEditable={true} key={items.id}>{items.name}</h1>
            <div className="buttonContainer">
                <input className="button" type="submit" onClick={(e)=>{edit(e.target.parentElement.previousElementSibling.textContent,items.id);match.history.push('/')}} value="Save"/>
                <input className="button" type="submit" onClick={(e)=>{add(e.target.parentElement.previousElementSibling.textContent);match.history.push('/')}} value="Add"/>
                <input className="button" type="submit" onClick={()=>{Delete(items.id);match.history.push('/')}} value="Delete"/>
            </div>
        </div>
    )

}

export default EditDirector;
