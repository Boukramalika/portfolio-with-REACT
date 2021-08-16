
import React,{useEffect, useState} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
function Login(){
    const [input , setInput]= useState({
        email:"",
        password:"",
    })

    
   function handleChange (e){
       const {name , value } = e.target 
       setInput(prevInput =>{
           return {
               ...prevInput?
               [name]:value
           }
       })
       
}
    const [btn ,setBtn]= useState(false)
    useEffect(()=>{
        if (input.password.length> 5 && input.email !== ""){
            setBtn(true)
        }else if (btn ===true){
            setBtn(false)
        }
   },[input.password, input.email, btn ])


   const handleSubmit=(e)=>{
    e.preventDefault();
    const newEmail={
        email:input.email,
        password:input.password,
    }
    axios.post('/signup',newEmail)

   }
  
    return (
        <div className ="signUpLoginBox" >
            <div className="slContainer">
            <div className="formBoxRight">
                    <div className="formContent">
                    <h2>Connexion</h2> 
                        <form onSubmit={handleSubmit} >
                          
                           <div className ="inputBox">
                              <input onChange={handleChange}  name="email"value={input.email} type="email"  autoComplete="off"required />
                              <label htmlFor="email">Email</label>
                           </div>
                           <div className ="inputBox">
                              <input onChange={handleChange}  name="password" value={input.password} type="password"  autoComplete="off"required />
                              <label htmlFor="password">Mot de passe</label>
                           </div>
                           {btn ? < button >Connexion</button>:< button disabled >Connexion</button> }
                          
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink"to="/signup" >Nouveau sur mon Portfolio? inscrivez-vous.</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login