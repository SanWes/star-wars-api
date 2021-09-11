import React, {useState, useEffect} from 'react';
import {  useParams } from 'react-router';
import axios from 'axios';

import Planets from './Planets';

const Display = () => {

        const {category, id} = useParams();

        const [info, setInfo] = useState({});

        const[home, setHome] = useState()


        useEffect(() => {

            
            axios.get(`https://swapi.dev/api/${category}/${id}/`)
                    .then(res=>{
                        console.log("RESPONSE AFTER HISTORY PUSH AND NEW AXIOS CALL", res);


                        setInfo(res.data)

                    })

                    .catch(err=> console.log(err))

        },[category,id]
        )


        const homeworldHandler = (e) => {
            e.preventDefault()

            if( category === "people" ) {

                axios.get(`${info.homeworld}`)
                .then(res=>{
                            var home = res.data.name;
                            setHome(home)
                            console.log(home);
                            })
                .catch(err=> console.log(err))

            }

        }


    return(

        <div>
         <h1>Info from Star Wars to Display:  {category} # {id} </h1>

        {/* Conditionally render the following depending on  */}

                {category === "people"?
                    <>

                <h3>Name: {info.name} </h3>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Eye Color: {info.eye_color}</h3>

                <p> <b> Home World:  </b> {home} </p>

                {/* <a href={info.homeworld}> homeworld </a> */}
            <button className="btn-success" onClick={homeworldHandler}>Load HomeWorld</button>

                    </>:
                
                category === "planets"?
                    <>
                <Planets name={info.name} climate={info.climate} terrain={info.terrain} orbital_period={info.orbital_period} ></Planets>
                    </>:
                

                category ==="films"?

                    <>

                <h3>Title: {info.title}</h3>
                <h3>Director: {info.director}</h3>
                <h3>Producer: {info.producer}</h3>
                <p> <b>  Opening Crawl: </b> 
                <br />    {info.opening_crawl}</p>

                    </>:

                    <>

                <h1>New Query Who'sTHIS?</h1>
                <h1>These are not the droids you're looking for</h1>
                <img src="https://pm1.narvii.com/6082/89e4b1e0b38eaa9a80cb6e7e9642a977dfef4a4d_hq.jpg" alt="" />

                    </>
        }
        

        </div>

    )
}


export default Display;