import React,{useState,useEffect} from 'react';
import "./movieDetail.css";
import {Link} from 'react-router-dom'

function MovieDetail(match) {

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
        const add =async(data,id)=>{


        }
        const Delete =async(data,id)=>{}

    const fetchItems=async ()=>{
        let getUrl='http://localhost:3002/api/movies/'+match.match.params.id;
        let data =await fetch(getUrl);
        let data1=await data.json();
        console.log(data1)
        setItems(data1[0])
    }
        return (
            <div className="movieContainer">
                <div className="movie">
                   <input contentEditable={true} onChange={(e)=>{this.setItems({title:e.target.value}) } }value= {items.title} />
                    <h5>actor = {items.actor}</h5>
                    <h5>description = {items.description}</h5>
                    <h5>genre = {items.genre}</h5>
                    <h5>gross_earning_in_mil = {items.gross_earning_in_mil}</h5>
                    <h5>rating = {items.rating}</h5>
                    <h5>runtime = {items.runtime}</h5>
                    <h5>votes = {items.votes}</h5>
                    <h5>year = {items.year}</h5>
                </div>
                <div className="buttons">
                <input className="button" type="submit" onClick={(e)=>{edit(e.target.parentElement.previousElementSibling.textContent,items.id);match.history.push('/')}} value="Edit"/>
                <input className="button" type="submit" onClick={(e)=>{add(e.target.parentElement.previousElementSibling.textContent);match.history.push('/')}} value="Add"/>
                <input className="button" type="submit" onClick={()=>{Delete(items.id);match.history.push('/')}} value="Delete"/>

                </div>
            </div>
        )

}

export default MovieDetail;
