import ModuleList from "./ModuleList";
import { FaEllipsisV} from "react-icons/fa";

function Modules() {
  return (
    <div>
                <div>
                <button className="btn btn-light float-end" style={{ margin: 3 }}>
                    <FaEllipsisV /> {/* Use the ellipsis icon */}
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
      <ModuleList />
    </div>
  );
}
export default Modules;