import React,{useState,useEffect} from 'react';
import "./Movie.css";

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
                <div className="title-year">
                    <h4 className="title"></h4>
                    <h5 className="year"></h5>
                </div>
            </div>
        )

}

export default Movie;
