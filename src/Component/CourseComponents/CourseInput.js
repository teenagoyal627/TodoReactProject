import React, { useState } from 'react';
import styled from 'styled-components';
// import './CourseInput.css';
import Button from '../UI/Button';

const FormControl =styled.div `

    margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    ${'' /* for the invalid prop another way
    color:${props => props.invalid ?'red':'black'}*/}
  }
  
  & input {
    ${'' /* width:100%; */}
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    ${'' /* border-color:${props.invlaid ?'red':'black'} */}
    ${'' /* background-color:${props.invalid ? 'red':'black'} */}
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input
  {
    background-color: rgb(245, 124, 124);
    border-color: red ;
  }

  &.invalid label{
    color: red;
  }


`;
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true)  //true means voo valid hai usme hum likh sakte hai
  
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length>0){
        setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();//page refresh na ho isliye isko use liya hai means form submit ke baad page bubara lod na ho
    setEnteredValue(''); //this is used kuki jab form submit ho jaye toh from dubara se khali ho jaye lkin iske sath sath input tag me value bhi llikha hoga

    if (enteredValue.trim().length === 0){
        setIsValid(false);
    return;
    
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
         {/* onsubmit is used it is compulosry because when when we submit the form it works  */}
         <FormControl className={!isValid && 'invalid'}>
         {/* another way of use invalid is by props in formcontrol
         <FormControl invalid=(!isValid) here invalid is pass as as props function 
          */}
         <label >Course Goal</label> 
         {/* //isvalid  nhi h means isvalid ki value false hai means empty hai block*/}
        <input type="text" 
        value  ={enteredValue}  //ye isliye kuki form ko intial value mile intial value iski enpty hai isliye form submit ke baad empty ho jayega
        onChange={goalInputChangeHandler} />
        </FormControl>    
     
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;