import React,{useState,useEffect} from 'react';
import "./movieDetail.css";
import {Link} from 'react-router-dom'

function MovieDetail(match) {

    useEffect(()=>{fetchItems();},[]);

    const [items,setItems]=useState([]);
    const [Title,setTitle]=useState('H');
    const [Actor,setActor]=useState('H');
    const [Description,setDescription]=useState('H');
    const [Runtime,setRuntime]=useState('H');
    const [Genre,setGenre]=useState('H');
    const [Rating,setRating]=useState('H');
    const [Earning,setEarning]=useState('H');
    const [Year,setYear]=useState('H');
    const [Votes,setVote]=useState('H');



    const change =(name1,value)=>{
    console.log(value)
    let jsondata=items
    console.log(jsondata)
    setTitle(value)

    }



      const edit=async(id)=>{
      let editData={
          "title":Title,
          "description": Description,
          "runtime": Runtime,
          "genre": Genre,
          "rating": Rating,
          "metascore": 100,
          "votes": Votes,
          "gross_earning_in_mil": Earning,
          "director_id": 35,
          "actor": Actor,
          "year": Year
      }


            let getUrl='http://localhost:3002/api/movies/'+id

            let data1 =await fetch(getUrl,{method:'PUT',headers: {
                    'Content-Type': 'application/json',
                }
                ,body: JSON.stringify(editData)})
            console.log("edit worked")
            console.log(data1)

        }


        const add =async()=>{
         let editData={
                  "title":Title,
                  "description": Description,
                  "runtime": Runtime,
                  "genre": Genre,
                  "rating": Rating,
                  "metascore": 100,
                  "votes": Votes,
                  "gross_earning_in_mil": Earning,
                  "director_id": 35,
                  "actor": Actor,
                  "year": Year
              }
         let getUrl='http://localhost:3002/api/movies/'

                    let data1 =await fetch(getUrl,{method:'POST',headers: {
                            'Content-Type': 'application/json',
                        }
                        ,body: JSON.stringify(editData)})
                    console.log("add worked")
                    console.log(data1)

        }



        const Delete =async(id)=>{
         let getUrl='http://localhost:3002/api/movies/'+id
                let data1 =await fetch(getUrl,{method:'DELETE',headers: {
                        'Content-Type': 'application/json',
                    }
                   })
                console.log("delete worked")
                console.log(data1)
        }

    const fetchItems=async ()=>{
        let getUrl='http://localhost:3002/api/movies/'+match.match.params.id;
        let data =await fetch(getUrl);
        let data1=await data.json();

        setItems(data1[0])
        setTitle(data1[0].title)
        setActor(data1[0].actor)
        setDescription(data1[0].description)
        setEarning(data1[0].gross_earning_in_mil)
        setGenre(data1[0].genre)
        setVote(data1[0].votes)
        setRating(data1[0].rating)
        setRuntime(data1[0].runtime)
        setYear(data1[0].year)

    }
        return (
            <div className="movieContainer">
                <div className="movie">
                  <div> Title  <input onChange={(e)=>{setTitle(e.target.value)} } value= {Title} /></div>
                    <div> Actor  <input onChange={(e)=>{setActor(e.target.value)} } value= {Actor}/></div>
                    <div> Description  <input onChange={(e)=>{setDescription(e.target.value)} } value= {Description}/></div>
                    <div> Genre  <input onChange={(e)=>{setGenre(e.target.value)} } value= {Genre}/></div>
                    <div> Earning  <input onChange={(e)=>{setEarning(e.target.value)} } value= {Earning}/></div>
                    <div> Rating  <input onChange={(e)=>{setRating(e.target.value)} } value= {Rating}/></div>
                    <div> Runtime  <input onChange={(e)=>{setRuntime(e.target.value)} } value= {Runtime}/></div>
                    <div> Votes  <input onChange={(e)=>{setVote(e.target.value)} } value= {Votes}/></div>
                    <div> Year  <input onChange={(e)=>{setYear(e.target.value)} } value= {Year}/></div>
                </div>
                <div className="buttons">
                <input className="button" type="submit" onClick={(e)=>{edit(items.id);match.history.push('/')}} value="Edit"/>
                <input className="button" type="submit" onClick={()=>{add();match.history.push('/')}} value="Add"/>
                <input className="button" type="submit" onClick={()=>{Delete(items.id);match.history.push('/')}} value="Delete"/>

                </div>
            </div>
        )

}

export default MovieDetail;
