import './style.css';
import formMaster from './formMaster.js'
import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import HandleValidation from "./HandleValidation.js";



function SignUp() {
  const navigate = useNavigate();
  const[error, setError] = useState({});
  const navigateToLogin = (e) => {
    console.log("Account Already Exists!!");
    navigate('/login');

  }

  const obj={
        first_name: "",
        last_name: "",
        gender:"male",
        email: "",
        phone: "",
        address:"",
        password:"",
        state:"",
        cpassword:"",
        check:false,
        };
      const [data, setData] = useState({...obj});

  const handleClick = (e)=>{
    const {name,value,type,checked} = e.target;
    if(type==="checkbox")
      {
        setData((prev)=>({
          ...prev,
          check:checked
        }));
      }
      else{
        setData((prev)=>({
          ...prev,
          [name]:value,
        }));
      }
  }

  const submitButton = (e)=>{
    e.preventDefault();
    const {name,value,type} = e.target;
      console.log(name,value,type)
      console.log(data)
      const newerror = HandleValidation(data);
      setError(newerror);
      console.log("newerror",newerror,Object.keys(newerror))
      if(Object.keys(newerror).length===0)
        {
          console.log("no error");
          const users = JSON.parse(localStorage.getItem("users"))||[];
          const userExists = users.some(user=>user.email === data.email)
          if(userExists)
          {
            console.log("User exists")
            alert("Account Already Exists");
            navigate("/login");
          }
          else{
            users.push({...data});
            localStorage.setItem("users",JSON.stringify(users));
            alert("Sign Up Successful! Directing to login Page");
            navigate("/login");
          } 
        }
        
        else
        {
          console.log("Form not submitted");
          (alert("Form Not Submitted"));
        }
        // console.log("error",error);
        
  }

console.log(data);
  
  return (
    <form className="form1" onSubmit={submitButton}>
      
        {formMaster(data,handleClick).map((field)=>{
          
          if(field.type!=="fieldGroup" && field.type!=="stateGroup" && field.type!=="password" && field.type!=="checkbox"){
            return(
              <div key={field.name}>
              <label>{field.label}</label>
              <input type={field.type} name={field.name} className={field.className} value={field.value} onChange={field.onchange} />
              {error[field.name] && (<span className="errorMessage">{error[field.name]}</span>)}
            </div>
          )
        }
      if(field.type==="fieldGroup"){
        // console.log(error);
        return(
          // <div key={field.}></div>
          <div key={field.name} className={field.className}>
            <label>{field.label}</label>
            {field.fields.map((genderRadioButton)=>{
              return (<div key={genderRadioButton.id} id={genderRadioButton.id}> 
                <label> {genderRadioButton.label}</label>
                <input type={genderRadioButton.type} value={genderRadioButton.value} checked={data.gender===genderRadioButton.value} id={genderRadioButton.id} onChange={genderRadioButton.onchange} name={field.name}/>
                {error.name && (<span className="errorMessage">{error.name}</span>)}
              </div>)
            })}
          </div>
        )
      }

      if(field.type==="stateGroup")
      {
        return(
          <div key={field.name} className={field.className}>
            <label>{field.label}</label>
            <select name={field.name} className={field.className} onChange={field.onchange} value={data.state} >

            <option>---Select State---</option>
            {field.states.map((addState,index)=>{
              return(
                <option key={addState+index} value={addState}>{addState}</option>
              )
            })}
            </select>

          </div>
        )
      }
      if(field.type==="password"){
        // console.log("This is password")
        return(
          
          <div key={field.name}>
          <label>{field.label}</label>
          <input type={field.type} name={field.name} className={field.className} value={field.value} onChange={field.onchange} />
          {error[field.name] && (<span className="errorMessage">{error[field.name]}</span>)}
        </div>
      )}

      if(field.type==="checkbox")
      {
        return(
          <div className='checkBox' key="checkBox">
            <div>
            <label>{field.label}</label>
            </div>
            <div>

            <input type={field.type} name={field.name} className={field.className} checked={field.check}/>
            </div>
          </div>
        )
      }
      
      return null;
      
    })
  }
  
      <button type='submit' disabled={!data.check} onClick={submitButton}>Submit</button>
      <Link to="/login" style={{color:"blue"}}onClick={navigateToLogin}>Login Here</Link>
    </form>
  );
}

export default SignUp;