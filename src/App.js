import Kanbas from "./Kanbas";
import Labs from "./Labs/"
import HelloWorld from "./Labs/a3/HelloWorld";
// import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Project from "./project";
// import express from 'express';
// import Hello from './hello.js';
// import Lab5 from "./lab5.js";
// import cors from "cors";
// import CourseRoutes from "./Kanbas/Courses/routes.js";
// import ModuleRoutes from "./Kanbas/Courses/Modules/routes.js";

// app.use(cors());
// app.use(express.json());
// const app = express()
// app.use(express.json());
// ModuleRoutes(app);
// CourseRoutes(app);
// Lab5(app);
// Hello(app)
// app.listen(4001)


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;


// function App() {
//   // const screen = "labs";
//   return (
//     <HashRouter>
//       <div>
//         <Routes>
//           {/* <Route path="/" element={<Navigate to="project" />} /> */}
//           <Route path="/project/*" element={<Project />} />
//           <Route path="/Labs/*" element={<Labs />} />
//           <Route path="/Kanbas/*" element={<Kanbas />} />
//           <Route path="/hello" element={<HelloWorld />} />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }


// function App() {
//   return (
//     <HashRouter>
//       <div>
//         <Routes>
//           {/* <Route path="/" element={<Navigate to="/Labs" />} /> */}
//           <Route path="/project/*" element={<Project />} />
//           <Route path="/hello" element={<HelloWorld />} />
//           <Route path="/Labs/*" element={<Labs />} />
//           <Route path="/Kanbas/*" element={<Kanbas />} />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// export default App;