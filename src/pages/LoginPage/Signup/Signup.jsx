import React,{useState} from 'react'
import {Link } from 'react-router-dom'
 const Signup =()=>{
     const data ={
         email:"",
         password:"",

     }
     const [loginData,setLoginData]=useState(data)

     const handleChange = (e)=>{
        setLoginData({...loginData,[e.target.id]: e.target.value })
     }
     const {email,password}=loginData

     const btn = email !=="" || password !== ""
      ?  <button>Inscription</button> : <button disabled>Inscription</button>
    
     return (
        <div className ="signUpLoginBox" >
            <div className="slContainer">
                <div className="formBoxRight">
                    <div className="formContent">
                        <form>
                           <h2>Inscription</h2> 
                           <div className ="inputBox">
                              <input onChange={handleChange} value={email} type="email" id ="email" autoComplete="off"required />
                              <label htmlFor="email">Email</label>
                           </div>
                           <div className ="inputBox">
                              <input onChange={handleChange} value={password} type="password" id ="password" autoComplete="off"required />
                              <label htmlFor="password">Mot de passe</label>
                           </div>
                           {btn}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink"to="/login" >Déja inscrit ? connecter-vous.</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     )
 }
 export default Signup