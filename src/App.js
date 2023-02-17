import React, { useState } from "react";
import './App.css'
import CourseInput from "./Component/CourseComponents/CourseInput";
import CourseList from "./Component/CourseComponents/CourseList";
function App ()
{
   const [courseGoals,setCourseGoals]=useState([
    {text:'Do all exercise!', id:'g1'},
    {text:'Finish the course!',id:'g2'}
   ]);
   const addGoalHandler =(enteredText)=>
   {
    setCourseGoals(prevGoals =>
      {
        const updatedGoals=[...prevGoals];
        updatedGoals.unshift({text:enteredText,
        id:Math.random().toString()
        //this is used to genrate the random id of per goals it is unique because it is used in deleting the goals
        // this is used kuki hum jibhi goal pe click kre toh wahi hone chahiye random denge hum jitne goal hoge uthene hi unke id hogi isliye ussi accordign delete hogs
      });
      return updatedGoals;
      });
 };
   const deleteItemHandler=(goalId)=>
   {
             setCourseGoals(prevGoals=>
              {
                const updatedGoals =prevGoals.filter(goal => goal.id !==goalId);
                return updatedGoals;
              })
   }
   let content =(
    <p>No goals found .May be add one ?</p>
   );
   if (courseGoals.length >0 ){
    content =(
      <CourseList items ={courseGoals}
      onDeleteItem ={deleteItemHandler} />
   )
   }
  return (
    <div>
   <section id="goal-form">
    <CourseInput onAddGoal ={addGoalHandler}/>
   </section>
   <section id ='goals'>
    {content}
   </section>
   </div>
  )
}
export default App;
