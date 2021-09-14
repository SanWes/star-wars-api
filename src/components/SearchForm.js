import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'



const SearchForm = () => {

    const [categories, setCategories ] = useState([])

    const [formInfo, setFormInfo] = useState({
        category:"people",
        id:""
    })

    const [randInfo, setRandInfo] = useState({
        category:"starships",
        id: "3"
    })

    //initialize useHistory and store it in a variable so we can use it
    const history = useHistory();


    useEffect(()=> {
        //use axios to get all the categories
        axios.get("https://swapi.dev/api/")
            .then(res=> {
                        console.log("res looks like -->", res);
                        console.log(Object.keys(res.data));
                        setCategories(Object.keys(res.data))

                        })
            .catch(err=> console.log(err))

    }, [] )


    const changeHandler = (e)=> {
        console.log("changing input!");
        console.log(e.target.name);
        console.log(e.target.value);

        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("SENT API FORM");
        console.log(formInfo);

        history.push(`/${formInfo.category}/${formInfo.id}`)

    }

    const showRandom = (e) => {
        e.preventDefault();
        console.log("Randomizing Display");

        // var joke = arr[Math.floor(Math.random()*arr.length)];
        // this.setState({jokes: [joke] });

        setRandInfo()
        history.push(`/${randInfo.category}/${randInfo.id}`)

        

        // history.push(`/${})

    }



    return (
        

        <div className="container-md">

            
            <nav className="navbar topnav navbar-dark"> 
           
            <div className="form-group"> 
           

            <form onSubmit={submitHandler} className="form-inline row g-3 align-items-center form-control" action="">
                <div className="col-auto"> 

                    <h4>Category: </h4>
                    <select onChange={changeHandler} name="category" id="" className="form-select ">

                        {
                            categories.map((cat, idx)=> {
                                return <option key={idx} value={cat}>{cat}</option>
                            })
                        }

                    </select>
                </div>

                <div className="col-auto"> 
                <h4>Id: </h4>
                    <input onChange = {(e)=>changeHandler(e)} type="number" name="id" id="" className="" />
                </div>
                    <button type="submit" className="btn btn-info">Search</button>

        {/* new button to do random search  */}

                </form>

                        <form onSubmit={showRandom} className="form-inline">
                        <div className="col-auto">
                        <button type="submit" className="btn btn-outline-warning">Show Random</button>
                        </div>
                        </form>


 </div>
 </nav>
        </div>
   )


}





export default SearchForm;