// import Signin from "./users/signin";
// import Account from "./users/account";
// import UserTable from "./users/table";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Nav from "../Nav";
// function Project() {
//   return (
//     <div className="row">
//       <div>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Navigate to="/project/home" />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/account" element={<Account />} />
//         <Route path="/admin/users" element={<UserTable />} />

//         </Routes>
//       </div>
//     </div>
//   );
// }
// export default Project;


// import Signin from "./users/signin";
// import Account from "./users/account";
// import UserTable from "./users/table";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Nav from "../Nav";
// function Project() {
//     return (
//         <div className="row">
//             <div>
//                 <Nav />
//             </div>
//             <br></br>
//             <div className="row">
//                 <Routes>
//                     <Route path="/signin" element={<Signin />} /> Signin
//                     {/* <Route path="/signup" element={<Signup />} /> */}
//                     <Route path="/account/:id" element={<Account />} />
//                     <Route path="/account" element={<Account />} />
//                     <Route path="/admin/users" element={<UserTable />} />
//                     <Route path="/" element={<Navigate to="/project" />} />
//                 </Routes>

//             </div>
//         </div>
//     );
// }
// export default Project;


import React from "react";

import { Link } from "react-router-dom";
// import { Routes, Route, Navigate, Link } from "react-router-dom";
// import Signin from "./users/signin";
// import Nav from "../Nav";
// import Account from "./users/account";
// import UserTable from "./users/table";

// function Project() {
//   return (
//     <div className="row">
//       <div>
//          <Nav />
//       </div>
//       <div>
//         <nav className="nav nav-tabs mt-2">
//           <Link to="/project/signin" className="nav-link">Signin</Link>
//           <Link to="/project/account/:id" className="nav-link">Account</Link>
//           <Link to="/project/admin/users" className="nav-link">User Table</Link>
//         </nav>

//         <Routes>
//           <Route path="/project/signin" element={<Signin />} />
//           <Route path="/project/account/:id" element={<Account />} />
//           <Route path="/project/account" element={<Account />} />
//           <Route path="/project/admin/users" element={<UserTable />} />
//           <Route path="/" element={<Navigate to="/project" />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Project;


function Project() {
    return (
        <nav className="nav nav-tabs mt-2">
            <Link to="/project/signin" className="nav-link">Signin</Link>
            <Link to="/project/account/:id" className="nav-link">Account</Link>
            <Link to="/project/admin/users" className="nav-link">User Table</Link>
        </nav>
    );
}
export default Project;