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
        <p>The validation for the "Hook Forms" assignment is rendered just after this hookforms section</p>
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

/**
 * // - - - - - - C O D E  B R E A K D O W N - - - - - - //
 * 
 * line number. explanation of code
 * 
 * 1. import react and useState
 * 3. create hook form component with props
 * 4. declares state for firstName and sets initial state to empty string
 * 5. declares state for lastName and sets initial state to empty string
 * 6. declares state for email and sets initial state to empty string
 * 7. declares state for password and sets initial state to empty string
 * 8. declares state for confirmPassword and sets initial state to empty string
 * 
 * 10. create createUSer function that takes in an event
 * 13. calls e.preventDefault to prevent browser refreshing 
 *     when clicking the submit button.
 * 
 * 16. Create a newUser obj to hold values 
 * 
 * 25. returns
 * 27. opening JSX tag. code will not render unless it's wrapped in 
 *      containing tags. 
 * 28. From here to line 32 is a header, in which sits an h1, h4, and p tags. Basic HTML.
 * 
 * 33. Here's our opening form tag, that when we submit it runs the createUser function
 *     we created above
 * 34. div .inptGrp 
 * 35. first name label
 * 36. firstName input
 * 39. value = current state of firstName var (when input changes this changes, completing two way data binding)
 * 40. synthetic onChange event that takes in event
 *     When user types in input, anonymous function setsFirstName
 *     to the value of the target event. (value of changing firstName)
 * 
 * 45. value = current state of lastName var (when input changes this changes, completing two way data binding)
 * 46. synthetic onChange event that takes in event
 *     When user types in input, anonymous function setsLastName
 *     to the value of the target event. (value of changing lastName)
 * 
 * 59. value = current state of email var (when input changes this changes, completing two way data binding)
 * 60. synthetic onChange event that takes in event
 *     When user types in input, anonymous function setEmail
 *     to the value of the target event. (value of changing firstName)
 * 
 * 69. value = current state of password var (when input changes this changes, completing two way data binding)
 * 70. synthetic onChange event that takes in event
 *     When user types in input, anonymous function setPassword
 *     to the value of the target event. (value of changing password)
 * 
 * 77. value = current state of confirmPassword var (when input changes this changes, completing two way data binding)
 * 78. synthetic onChange event that takes in event
 *     When user types in input, anonymous function setsConfirmPassword
 *     to the value of the target event. (value of changing confirmPassword)
 * 
 * 82. div containing results
 *     the p tags on lines 84 to 88 each hold a label tag followed by variables for each
 *     corresponding user input. as you type in each field, input should show up here.
 * 
 * 97. export default HookForm
 *      
 * 
 */