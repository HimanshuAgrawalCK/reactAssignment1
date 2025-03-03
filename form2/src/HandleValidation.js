const HandleValidation = (data) =>{
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

   export default HandleValidation;