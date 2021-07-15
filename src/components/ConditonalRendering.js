import React, {useState} from 'react';

const ConditionalRendering = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  
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
    setFirstName("");
    setLastName("");

    setHasBeenSubmitted(true);
  };
  return (
    
    <>
      <header>
        <h1>Conditional Rendering</h1>
        
      </header>
      <form onSubmit = {createUser}>
        {
          hasBeenSubmitted ?
          <h4>Thank you for submitting the form!</h4> :
          <h4>Welcome, please fill out and submit the form.</h4>
        }
        <div className="inptGrp">
          <label>First Name: </label>
          <input 
            id="firstNameCR" 
            type="text" 
            value = {firstName} 
            onChange ={(e)=>setFirstName(e.target.value)}
            
            />
        </div>
        <div className="inptGrp">
          <label>Last Name: </label>
          <input 
            id="lastNameCR" 
            type="text" 
            value = {lastName} 
            onChange ={(e)=>setLastName(e.target.value)}
            
            />
        </div>
        <div className="inptGrp">
          <label>Email: </label>
          <input 
            id="emailCR" 
            type="email" 
            value = {email} 
            onChange ={(e)=>setEmail(e.target.value)}
            
            />
        </div>
        <div className="inptGrp">
          <label>Password: </label>
          <input 
            id="passwordCR" 
            type="password" 
            value = {password} 
            onChange ={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="inptGrp">
          <label>Confirm Password: </label>
          <input 
            id ="confirmPasswordCR" 
            type="password" 
            value = {confirmPassword} 
            onChange ={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
        <input type="submit" value ="Create User" />
      </form>
    
      <div className = "resultsCR">
        <h2>Dynamically Generated Data from Inputs</h2>
        <p><label>First Name: </label>{firstName}</p>
        <p><label>Last Name: </label>{lastName}</p>
        <p><label>Email: </label>{email}</p>
        <p><label>Password: </label>{password}</p>
        <p><label>Confirm Password: </label>{confirmPassword}</p>
      </div>
      
      </>
      
    );

};

export default ConditionalRendering;