import React, {useState} from 'react';

const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const createUser = (e) => {
    //prevent the default refresh of browser
    //to keep state from being reset
    e.preventDefault();

    //create js object to hold values
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };
    console.log("Welcome", newUser);
  };
  return (
    
    <>
      <header>
        <h1>Hook Form</h1>
        <h4>Type your info in the text fields to see it appear in resluts section</h4>
        <p>The validation for the "More Forms" assignment is rendered just after this hookforms section</p>
      </header>
      <form onSubmit = {createUser}>
        <div className="inptGrp">
          <label>First Name: </label>
          <input 
            id="firstName" 
            type="text" 
            value = {firstName} 
            onChange ={(e)=>setFirstName(e.target.value)}
            
            />
        </div>
        <div className="inptGrp">
          <label>Last Name: </label>
          <input 
            id="lastName" 
            type="text" 
            value = {lastName} 
            onChange ={(e)=>setLastName(e.target.value)}
            
            />
        </div>
        <div className="inptGrp">
          <label>Email: </label>
          <input 
            id="email" 
            type="text" 
            value = {email} 
            onChange ={(e)=>setEmail(e.target.value)}
            
            />
        </div>
        <div className="inptGrp">
          <label>Password: </label>
          <input 
            id="password" 
            type="text" 
            value = {password} 
            onChange ={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="inptGrp">
          <label>Confirm Password: </label>
          <input 
            id ="confirmPassword" 
            type="text" 
            value = {confirmPassword} 
            onChange ={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
      </form>
    
      <div className = "results">
        <h2>Your Data (HookForm assignment)</h2>
        <p><label>First Name: </label>{firstName}</p>
        <p><label>Last Name: </label>{lastName}</p>
        <p><label>Email: </label>{email}</p>
        <p><label>Password: </label>{password}</p>
        <p><label>Confirm Password: </label>{confirmPassword}</p>
      </div>
      
      </>
      
    );

};

export default HookForm;