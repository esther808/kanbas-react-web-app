import React from "react";
import { useParams } from "react-router-dom";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import db from "../../Database";
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            <div style={{ paddingRight: 300 }}>
                <button className="btn btn-light float-end" style={{ margin: 3 }}>
                    <FaEllipsisV /> {/* Use the ellipsis icon */}
                </button>
                <button className="btn btn-danger float-end" style={{ margin: 3 }}>
                    + Module
                </button>

                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle float-end" style={{ margin: 3 }}>
                        Publish All
                    </button>
                </div>

                <button className="btn btn-light float-end" style={{ margin: 3 }}>
                    View Progress
                </button>
                <button className="btn btn-light float-end" style={{ margin: 3 }}>
                    Collapse All
                </button>
            </div>
            <br></br>
            <br></br>
            <hr style={{ width: 1500 }}></hr>



            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <div key={index} className="list-group modules mt-4">
                        <li className="list-group-item module-title" style={{ width: "1100px", paddingRight: "10px" }}>
                            <VscGripper size="20" />
                            <BiCaretDown size="10" />
                            {module.name} {module.description}

                            <div className="end-items">
                                <FaCheckCircle className="green-check" size="20" />
                                <BiCaretDown size="10" />
                                <FaPlus size="20" />
                                <FaEllipsisV size="20" />
                            </div>
                        </li>
                    </div>
                ))
            }
        </div>
    );
}

export default ModuleList;