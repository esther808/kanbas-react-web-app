import React from "react";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import Modules from "../Modules";

function Home() {
    return (
        <div className="row">
            <div className="col-8">
                <Modules />
            </div>
            <div className="col-4">
                <div className="col-4">

                    <ul className="list-group normal-text">
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1" style={{ width: "500px" }}>
                            Import Existing Content
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1" style={{ width: "500px" }}>
                            Import From Commons
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1" style={{ width: "500px" }}>
                            Choose Home Page
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1" style={{ width: "500px" }}>
                            View Course Stream
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1" style={{ width: "500px" }}>
                            New Announcement
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1" style={{ width: "500px" }}>
                            New Analytics
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1" style={{ width: "500px" }}>
                            View Course Notifications
                        </li>
                    </ul>

                </div>

                <br></br>
                <div className="todo-list" style={{ width: "500px" }}>
                    <h5>To Do</h5>
                    <hr />
                    <div style={{ width: "100%" }}>
                        <div>
                            <FaCheckCircle className="green-check" />
                            <a className="ms-1 black-link" href="#">
                                Grade A1 - ENV + HTML
                            </a>
                            <div className="end-items">
                                <span>X</span>
                            </div>
                        </div>
                        <p className="ms-4 x">100 points • Sep 11 at 11:45am</p>
                    </div>
                    <div style={{ width: "100%" }}>
                        <div>
                            <FaCheckCircle className="green-check" />
                            <a className="ms-1 black-link" href="#">
                                Grade A2 - CSS
                            </a>
                            <div className="end-items">
                                <span>X</span>
                            </div>
                        </div>
                        <p className="ms-4 x">100 points • Oct 02 at 11:45am</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;