import React, {useState} from 'react';


const Form = (props) => {

  /**
   * Setting State of input variables and error messages
   */
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

  /**
   * first name handler takes in event
   * sets first name to the value of the target event
   * if the length of the value of target event is LESS THAN 1 (aka nothing is entered)
   *  set the first name error var to the message
   * otherwise if length of target value is less than 2
   *  set first name error var to this other message
   * otherwise
   *  set first name error back to empty string 
   */
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

  /**
   * last name handler takes in event
   * sets last name to the value of target event
   * IF the length of the value of target event is LESS than 1 (nothing is entered)
   *  set the last name error var to the message
   * otherwise IF length of target is less than 2
   *  set last name error var to this other message
   * otherwise 
   *  set last name error back to empty string 
   */
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

  /**
   * email handler takes in event
   * sets email to the value of target event
   * IF the length of the value of target event is LESS than 1 (nothing is entered)
   *  set the email error var to the message
   * otherwise IF length of target is less than 5
   *  set email error var to this other message
   * otherwise 
   *  set email error back to empty string 
   */
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
  /**
   * password handler takes in event
   * sets password to the value of target event
   * IF the length of the value of target event is LESS than 1 (nothing is entered)
   *  set the password error var to the message
   * otherwise 
   *  set password error back to empty string 
   */
  const handlePassword = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length<8) {
      setPasswordError("Password's got to be more than 8 characters");
    } else {
      setPasswordError("");
    } 
   }
   /**
   * confirm password handler takes in event
   * sets confirm password to the value of target event
   * IF the length of the value of target event is LESS than 1 (nothing is entered)
   *  set theconfirm  password error var to the message
   * otherwise 
   *  set confirm password error back to empty string 
   */
   const handleConfirmPassword = (e) => {
     setConfirmPassword(e.target.value);
     if(e.target.value !== password) {
       setConfirmPasswordError("These passwords don't match. Try again!");
     } else {
       setConfirmPasswordError("");
     }
   }
/**
 * when button is clicked newUser obj is created with data typed into form
 */
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
    //writes "Welcome, firstname lastname" to the console
    console.log("Welcome, ", newUser.firstName + " " + newUser.lastName);
    //sets first/lastName variables back to empty strings
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

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
        <h2>Your Data</h2>
        <p><label>First Name: </label>{firstName}</p>
        <p><label>Last Name: </label>{lastName}</p>
        <p><label>Email: </label>{email}</p>
        <p><label>Password: </label>{password}</p>
        <p><label>Confirm Password: </label>{confirmPassword}</p>
      </div>
      
      </>
      
    );

};

export default Form;