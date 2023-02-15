import './App.css';
import React, { useState } from 'react';
//import MyList from './MyList';
//import AuthContext from './AuthContext';
//import MyComponent from './MyComponent';
/** <HeaderText text ='Header text'/>  
    <InputRefFunc/>
    */

function App() {
  /**
  const userName = 'john';
  
    return (
      <AuthContext.Provider value={userName}>
        <MyComponent />
      </AuthContext.Provider>
      );  */
  // This is called when the button is pressed
  //const buttonPressed = () => {
  //  alert('Button pressed');
  //}
  //<button onClick={buttonPressed}>Press Me</button> 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  /* const inputChanged = (event) => {
    setUser({
      ...user, [event.target.name]:
        event.target.value
    });
  } */
  const handleSubmit = (event) => {
    alert('Привет ' + lastName + ' ' + firstName);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>First name </label>
      <input
        onChange={e => setFirstName(e.target.value)}
        value={firstName} /><br />
      <label>Last name </label>
      <input
        onChange={e => setLastName(e.target.value)}
        value={lastName} /><br />
      <label>Email </label>
      <input
        onChange={e => setEmail(e.target.value)}
        value={email} /><br />
      <input type="submit" value="Press me" />

    </form>
  );


};


/** 
function Hello() {
  const [firstName, setFirstName] = useState('John');
  return <div>Hello {firstName}</div>;
  }
*/
export default App;
/**
 firstName="Александр" lastName="Пустохин" 
 */