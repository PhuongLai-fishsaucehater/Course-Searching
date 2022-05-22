import React, { useState } from "react";
import { NavBar } from "./Nav";
import { Footer } from "./Nav";

export function Menu(props) {
    const [targetCourse, changeTarget] = useState('');
    const handleChange = (event) => {
        changeTarget(event.target.value);
    }

    const search = () => {
        props.search(targetCourse);
    }

    let courses = props.courses.filter(course => {
        return ((course.subject_area + " " + course.course_number).toLowerCase().includes(targetCourse.toLowerCase())
                    && targetCourse.length != 0); 
    });

    let suggest = courses.map(course => {
        if (course != undefined) {
            return (
                <p>
                    {course.subject_area + " " + course.course_number}
                </p>
            );
        }
    });


    return (
        <div>
            <NavBar />
            <header>
                <div className="container">
                    <h1>Welcome to our website!</h1>
                    <p className="motto">Search and learn more about the class that you want to take!</p>
                </div>
            </header>
            <div className="flex-container">
                <div className="item-2">
                    <form>
                        <label className="sr-only text-white" htmlFor="search">Search</label>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Course" onChange={handleChange} aria-label="Course" id="search" />
                            <button className="btn button2 btn-outline-secondary" type="button" onClick={search}>Search</button>
                            {suggest}
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="about-instructions">
                <div className="col p-0">
                    <div className="card p-0 h-100 instruction-card">
                        <div className="card-body">
                            <h5 className="card-title">Instruction</h5>
                            <p className="card-text">To use this page, simply put the course name of the course you want to find into the searchbar and press "search". For this version, simply press "search"</p>
                            <a href="info340.html" className="about-btn btn btn-primary">Go to INFO 340</a>
                        </div>
                    </div>
                </div>
                <div className="col p-0">
                    <div className="card p-0 about-card h-100">
                        <div className="card-body">
                            <h5 className="card-title">About us</h5>
                            <p className="card-text">We are iSchool students who want to create a website about courses for students in the University of Washington.</p>
                            <a href="about.html" className="about-btn btn btn-primary">Find out more</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}