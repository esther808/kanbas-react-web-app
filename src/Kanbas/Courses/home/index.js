import React from "react";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import Modules from "../Modules";

function Home() {
    return (
        <div className="row">
            <div className="col-9">
                <Modules />
            </div>
            <div className="col-2">
                <div className="float-end">

                    <ul className="list-group normal-text">
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            Import Existing Content
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            Import From Commons
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            Choose Home Page
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            View Course Stream
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            New Announcement
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            New Analytics
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            View Course Notifications
                        </li>
                    </ul>

                    <br></br>
                    <div className="todo-list float-end">
                        <h5>To Do</h5>
                        <hr />
                        <div style={{ width: "100%" }}>
                            <div>
                                <FaCheckCircle className="green-check" />
                                <button
                                    className="ms-1 black-link"
                                    onClick={() => {
                                        // insert later
                                    }}
                                >
                                    Grade A1 - ENV + HTML
                                </button>
                                <div className="end-items">
                                    <span>X</span>
                                </div>
                            </div>
                            <p className="ms-4 x">100 points • Sep 11 at 11:45am</p>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div>
                                <FaCheckCircle className="green-check" />
                                <button
                                    className="ms-1 black-link"
                                    onClick={() => {
                                        // insert later
                                    }}
                                >
                                    Grade A2 - CSS
                                </button>

                                <div className="end-items">
                                    <span>X</span>
                                </div>
                            </div>
                            <p className="ms-4 x">100 points • Oct 02 at 11:45am</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;