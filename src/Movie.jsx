import React,{useState,useEffect} from 'react';
import "./Movie.css";
import {Link} from 'react-router-dom'

function Movie() {

    useEffect(()=>{fetchItems();},[]);

    const [items,setItems]=useState([]);

    const fetchItems=async ()=>{
        let getUrl='http://localhost:3002/api/movies'
        let data =await fetch(getUrl);
        let data1=await data.json();
        console.log(data1)
        setItems(data1)
    }
        return (
            <div className="movie">
                {items.map(item=>(<h1 key={item.id}><Link to={'/movies/'+item.id}>{item.title}</Link></h1>))}
            </div>
        )

}

export default Movie;
