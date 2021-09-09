import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'



const SearchForm = () => {

    const [categories, setCategories ] = useState([])

    const [formInfo, setFormInfo] = useState({
        category:"people",
        id:""
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



    return (
        <div>

            <form onSubmit={submitHandler} className="form-inline row g-3 align-items-center" action="">
                <div className="col-auto"> 

                    <h4>Category: </h4>
                    <select onChange={changeHandler} name="category" id="" className="form-select">

                        {
                            categories.map((cat, idx)=> {
                                return <option key={idx} value={cat}>{cat}</option>
                            })
                        }

                    </select>
                </div>

                <div className="col-auto"> 
                <h4>Id: </h4>
                    <input onChange = {(e)=>changeHandler(e)} type="number" name="id" id="" className="form-control" />
                </div>
                    <button type="submit" className="btn btn-primary mb-2">Search</button>

                </form>

        </div>
   )


}





export default SearchForm;