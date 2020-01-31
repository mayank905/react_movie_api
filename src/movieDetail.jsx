import React,{useState,useEffect} from 'react';
import "./Movie.css";
import {Link} from 'react-router-dom'

function MovieDetail(match) {

    useEffect(()=>{fetchItems();},[]);

    const [items,setItems]=useState([]);


    const fetchItems=async ()=>{
        let getUrl='http://localhost:3002/api/movies/'+match.match.params.id;
        let data =await fetch(getUrl);
        let data1=await data.json();
        console.log(data1)
        setItems(data1[0])
    }
        return (
            <div className="movie">
               <h5>Title = {items.title}</h5>
                <h5>actor = {items.actor}</h5>
                <h5>description = {items.description}</h5>
                <h5>genre = {items.genre}</h5>
                <h5>gross_earning_in_mil = {items.gross_earning_in_mil}</h5>
                <h5>rating = {items.rating}</h5>
                <h5>runtime = {items.runtime}</h5>
                <h5>votes = {items.votes}</h5>
                <h5>year = {items.year}</h5>
            </div>
        )

}

export default MovieDetail;
