import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard(
  {
    courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse
  }
) {


  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  // // const course = {
  // //   name: "New Course", number: "New Number",
  // //   startDate: "2023-09-10", endDate: "2023-12-15",
  // // };
  // const addNewCourse = () => {
  //   setCourses([...courses,
  //   {
  //     ...course,
  //     _id: new Date().getTime()
  //   }]);
  // };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div style={{ marginLeft: "15px", marginTop: "15px" }}>
      <h1>Dashboard</h1>
      <hr />

      <h3>Published Courses
        <button className="btn btn-primary float-end margin-space" onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-info float-end margin-space" onClick={updateCourse} >
          Update
        </button>

      </h3>
      <hr />

      <input value={course.name} className="form-control margin-space"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control margin-space"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control margin-space" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control margin-space" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />


      {/* <div class="modal fade" id="addClass" tabindex="-1" role="dialog" aria-labelledby="addClassLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addClassLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input value={course.name} className="form-control margin-space"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
              <input value={course.number} className="form-control margin-space"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
              <input value={course.startDate} className="form-control margin-space" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
              <input value={course.endDate} className="form-control margin-space" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={addNewCourse} >Save changes</button>
            </div>
          </div>
        </div>
      </div> */}


      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <div className="card , course-card" style={{ width: "290px", margin: "10px" }}>
            <img
              src={require("../images/cardphoto.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item"
              style={{ padding: "15px" }}
            >
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {course.number} {course.name}
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                {course.number}.{course.startDate}.{course.endDate}
              </p>
            </Link>

            <span>
              <button className="btn btn-warning button-size"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>
              <button className="btn btn-danger button-size"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                Delete
              </button>
            </span>


          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
