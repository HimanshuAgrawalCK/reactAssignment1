import React, { useState } from "react";
import "./style.css";
// import "./style2_ai.css"

export default function Appp() 
{
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
      // button:!check,
      };
    const [data, setData] = useState({...obj});

      const [errors,setError]=useState({});

     const handleValidation = (data) =>{
      const errors={};
      if(data.first_name.length <2 || data.first_name.length >30)
      {
        errors.first_name = "First name should be between 2 to 30 characters"
      }
      
      if(!data.first_name.trim())
      {
        errors.first_name = "First name cannot be empty"
      }
      if(data.last_name.length <2 || data.last_name.length >30)
        {
          errors.last_name = "Last name should be between 2 to 30 characters"
        }
      if(!data.last_name.trim())
        {
          errors.last_name = "Last name cannot be empty"
        }
      if(!data.phone.trim())
      {
        errors.phone = "Phone Number cannot be empty";
      }
      if(data.phone.length < 10 || data.phone.length > 15)
      {
        errors.phone = "Phone Number should be between 10 to 15 digits";
      }
      if(!data.email.includes('@'))
      {
        errors.email = "Invalid Email Format";
      }
      if(!data.email.trim())
        {
          errors.email = "Email cannot be empty";
        }
        if(data.password !== data.cpassword)
        {
          errors.cpassword = "password not match"; 
        }
      

      if(data.password.length < 6 || data.password.length > 20)
      {
        errors.password="Password must be more than 6 characters and less than 20 characters";
      }
      if(data.password.length===0)
      {
        errors.password="Password is empty";
      }
      if(!data.address.length > 100){
        errors.address="Password length can be max 100 characters";
      }
      return errors;
     } 
      
    const validatee = (e) =>{
      e.preventDefault(); 
      const {name,value,type} = e.target;
      console.log(name,value,type)
      console.log(data)
      const newerror = handleValidation(data);
      setError(newerror);
      console.log("newerror",newerror,Object.keys(newerror))
      if(Object.keys(newerror).length===0)
      {
        console.log("Form submitted Successfully");
      }
      else
      {
        console.log("Form not submitted");
      }

    }

    const handleClick = (e) =>{
      const {name, value,type,checked} = e.target;
      console.log(name,value);
      console.log(type,checked);
      if(type==="checkbox")
      {
        setData((prev)=>({
          ...prev,
          check:checked,
        }));   
      }
    else
    {

        setData((prev)=>({
          ...prev,
          [name]:value,
          // gender: 
        }));   
        
      }
    }
        console.log(data);
        const states = [
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chhattisgarh",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal"
        ];
        
        // console.log(states);
        

    return (
    <div className="container">
      <form className="form1" onSubmit={validatee}>
        
          <label htmlFor="first_name">First Name </label>
          <input type="text" name="first_name" className="first_name" value={data.first_name} onChange={handleClick} />
          {errors.first_name && <span className="errorMessage">{errors.first_name}</span>}
          <label htmlFor="last_name"> Last Name </label>
          <input type="text" name="last_name" className="last_name" value={data.last_name} onChange={handleClick}/>
          {errors.last_name && <span className="errorMessage">{errors.last_name}</span>}
        <label htmlFor="phone"> Phone No. </label>
        <input type="number" name="phone" className="phone" value={data.phone} onChange={handleClick}/>
        {errors.phone && <span className="errorMessage">{errors.phone}</span>}
       
        <label htmlFor="email"> Email ID </label>
        <input type="email" name="email" className="email" value={data.email} onChange={handleClick}/>
        {errors.email && <span className="errorMessage">{errors.email}</span>}

          <label htmlFor="gender"> Gender :</label>
        <div className="genderBox">

          <input type="radio" name="gender" id="male" value="male" onChange={handleClick} checked={data.gender==="male"} />
          <label htmlFor="male"> Male</label>
          <input type="radio" name="gender" id="female" value="female" onChange={handleClick}/>
          <label htmlFor="female"> Female</label>
          <input type="radio" name="gender" id="other" value="other" onChange={handleClick}/>
          <label htmlFor="other"> other</label>
          {errors.gender && <span className="errorMessage">{errors.gender}</span>}
        </div>

        <label htmlFor="address"> Address :</label>
        <input type="textarea" name="address" className="address" value={data.address} onChange={handleClick}/>
        {errors.address && <span className="errorMessage">{errors.address}</span>}

        <label htmlFor="states">State</label>
        <select name="states" className="states" value={data.state} onChange={handleClick}>
          <option> --- Select State --- </option> 
          {states.map((state,index)=>
          (<option key={index} value={state}>{state}</option>)            
          )}
        </select>

        <label htmlFor="password"> Password :</label>
        <input type="password" name="password" className="password" value={data.password} onChange={handleClick}/>
        {errors.password && <span className="errorMessage">{errors.password}</span>}

        <label htmlFor="Cpassword"> Confirm Password :</label>
        <input type="password" name="cpassword" className="cpassword" value={data.cpassword} onChange={handleClick}/>
        {errors.cpassword && <span className="errorMessage">{errors.cpassword}</span>}

        
        <div>
        <input type="checkbox" name="check" id="check" className="checkbox" onChange={handleClick} checked={data.check}></input>
        <label htmlFor="check">Terms and Conditions</label>
        </div>
        <div className="buttons">
        <button type="submit" disabled={!data.check}  name="button" value="Submit" style={{backgroundColor:!data.check?"lightgrey":"lightgreen", color:"Black", borderRadius:"5px"} }>Submit</button>
        <button type="reset" onClick={(e)=>{setData({...obj})}}>Reset</button>
        </div>
      </form>
        </div>
    );
}

// I want to select male radio by default?
