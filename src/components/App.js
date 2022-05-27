import { useState } from "react";
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import { About } from "./About";
import { Menu } from "./Menu";
import { Course } from "./Course";

function App(props) {
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);


    const findCourse = (course) => {
        let newCourse = props.courses.filter(element => {
            return (element.subject_area.toUpperCase() + " " +
                    element.course_number === course.toUpperCase().trim());
        });
        console.log(newCourse);
        setCourse(newCourse);
        if (newCourse.length != 0) {
            navigate("/class")
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Menu search={findCourse} courses={props.courses}/>}/>
            <Route path="/About" element={<About />} />
            <Route path="/class" element={<Course course={course} />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
}

export default App;