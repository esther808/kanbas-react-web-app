import React from "react";
import { useParams } from "react-router-dom";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";

import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

    return (
        <div className="col-12">
            {/* <hr style={{ width: 100 }}></hr> */}

            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-success space float-end"
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                    >
                        Add
                    </button>
                    <button
                        className="btn btn-info space float-end"
                        onClick={() => dispatch(updateModule(module))}
                    >
                        Update
                    </button>
                    <input className="space text-width" 
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                    />
                    <textarea className="space text-width"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                    />
                </li>

                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <VscGripper size="20" />
                            <BiCaretDown size="10" />
                            <div class="float-end">
                                <button
                                    className="btn btn-success space"
                                    onClick={() => dispatch(setModule(module))}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger space"
                                    onClick={() => dispatch(deleteModule(module._id))}
                                >
                                    Delete
                                </button>
                                <FaCheckCircle className="green-check" size="20" />
                                <BiCaretDown size="10" />
                                <FaPlus size="20" />
                                <FaEllipsisV size="20" />
                            </div>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))}

            </ul>
        </div>
    );
}

export default ModuleList;