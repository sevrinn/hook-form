import React, {useState} from 'react';

const ConditionalRendering = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("")


  const handleFName = (e) => {
    setFirstName(e.target.value)
    if(e.target.value.length < 1) {
      setFNameError("First Name is required, babe");
    } else if (e.target.value.length< 2) {
      setFNameError("First Name needs to be 2 or more characters");
    } else {
      setFNameError("");
    }
  };
  const handleLName = (e) => {
    setLastName(e.target.value)
    if(e.target.value.length< 1) {
      setLNameError("Last Name is required, babe");
    } else if (e.target.value.length<2) {
      setLNameError("Last Name needs to be 2 or more characters");
    } else {
      setLNameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length<1) {
      setEmailError("Email is also required, love");
    } else if (e.target.value.length<5) {
      setEmailError("Email has to be more than 5 characters. sorry!");
    } else {
      setEmailError("");
    }
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length<8) {
      setPasswordError("Password's got to be more than 8 characters");
    } else {
      setPasswordError("");
    } 
   }
   const handleConfirmPassword = (e) => {
     setConfirmPassword(e.target.value);
     if(e.target.value !== password) {
       setConfirmPasswordError("These passwords don't match. Try again!");
     } else {
       setConfirmPasswordError("");
     }
   }
  
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
    console.log("Welcome, ", newUser.firstName + " " + newUser.lastName);
    setFirstName("");
    setLastName("");

    setHasBeenSubmitted(true);
  };
  return (
    
    <>
      <header>
        <h1>Conditional Rendering & More Forms</h1>
        
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
            onChange ={(e)=>handleFName(e)}
            />
            {
              fNameError ?
              <p>{fNameError}</p> :
              ''
            }
        </div>
        <div className="inptGrp">
          <label>Last Name: </label>
          <input 
            id="lastNameCR" 
            type="text" 
            value = {lastName} 
            onChange ={(e)=>handleLName(e)}
            />
            {
              lNameError ? 
              <p>{lNameError}</p> :
              ''
            }
        </div>
        <div className="inptGrp">
          <label>Email: </label>
          <input 
            id="emailCR" 
            type="email" 
            value = {email} 
            onChange ={(e)=>handleEmail(e)}
            />
            {
              emailError ?
              <p>{emailError}</p> :
              ''
            }
        </div>
        <div className="inptGrp">
          <label>Password: </label>
          <input 
            id="passwordCR" 
            type="password" 
            value = {password} 
            onChange ={(e)=>handlePassword(e)}
            />
            {
              passwordError ? 
              <p>{passwordError}</p> :
              ''
            }
        </div>
        <div className="inptGrp">
          <label>Confirm Password: </label>
          <input 
            id ="confirmPasswordCR" 
            type="password" 
            value = {confirmPassword} 
            onChange ={(e)=>handleConfirmPassword(e)}
            />
            {
              confirmPasswordError ? 
              <p>{confirmPasswordError}</p> : 
              ''
            }
        </div>
        <input type="submit" value ="Create User" />
      </form>
    
      <div className = "resultsCR">
        <h2>Your Data (MoreForms Assignment)</h2>
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