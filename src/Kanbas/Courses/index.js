
// import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FaBars } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./home";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
    const { courseId } = useParams();
    const URL = "http://localhost:4001/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    //   const course = courses
    //     .find((course) => course._id === courseId);
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bredcrmb-formatting">
                    <li> <FaBars className="red-icon" /></li>
                    <li>
                        <a href="/Courses">Courses</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/Home">Home</a>
                    </li>
                    {/* !!not changing to a > character!! - fix later */}
                    <li className="breadcrumb-item active" aria-current="page">
                        {course.name}
                    </li>
                </ol>
            </nav>
            {/* <h1>Course {course.name}</h1> */}
            <hr></hr>
            {/* <br/> */}
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <br></br>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>

    );
}
export default Courses;