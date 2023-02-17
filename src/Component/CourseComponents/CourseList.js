import React from "react";
import CourseItem from "./CourseItem";
import './CourseList.css'

function CourseList(props)
{
    return (
        <ul className="goal-list">
          {props.items.map(goal => (
            <CourseItem
              key={goal.id}
              id={goal.id}
              onDelete={props.onDeleteItem}
            >
              {goal.text}
            </CourseItem>
          ))}
        </ul>
      );
    };
    
export default CourseList;
