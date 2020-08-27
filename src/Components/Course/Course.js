import React, { useState } from 'react';
import courseData from '../../CourseData/courseData';
import Card from '../Card/Card';
import style from './Course.css';


const Course = () => {
    const data12 = courseData.slice(0, 12);
    const [data, setData] = useState(data12);
    const [card, setCard] = useState([]);
    const handelAddCourse = (data) =>{
        const newCard =[...card, data];
        setCard (newCard);

        // console.log("added country", data);
    };
    
    return (
        <div className="min-div ">
            <Card course={card}></Card>
             <section>
                <div className="container border">
                {
                data.map(data => 
                    
                    <div className="card m-4">
                        <img className="card-img-top" src={data.img} alt="" srcset=""/>
                    <div className="card-body">
                        <h4>{data.name}</h4>
                        <p>By: {data.username}</p>
                        <p>Price: ${data.price}</p>
                        <p>Enrolled: {data.students} Students</p>
                        
                    </div>
                    <div className="card-footer">
                        <button onClick={ ()=> handelAddCourse(data)} className="btn btn-info mt-3">Enroll Now</button>
                    </div>
                    </div>
                    
                    
                    )
            }
                 </div>
            </section>
            
        </div>
    );
};

export default Course;