import * as client from "./client";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Account() {
    const [user, setUser] = useState(null);
    // const [following, setFollowing] = useState([]);
    // const dispatch = useDispatch();

    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const user = await client.account();
            setUser(user);
        } catch (error) {
            navigate("/project/signin");
        }
    };
    const signOut = async () => {
        await client.signOut();
        navigate("/project/signin");
    };
    const updateUser = async () => {
        await client.updateUser(user._id, user);
    };

    useState(() => {
        fetchUser();
    }, []);
    return (
        <div className="container">
            <h1>Account</h1>
            <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                value={user?.password}
                className="form-control"
            />
            <input
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                type="text"
                value={user?.firstName}
                className="form-control"
            />
            <input
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                type="text"
                value={user?.lastName}
                className="form-control"
            />
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={signOut} className="btn btn-danger">
                Sign Out
            </button>
            <button onClick={updateUser} className="btn btn-success">
                Save
            </button>
            {user?.role === "ADMIN" && (
                <Link to="/project/users" className="btn btn-primary">
                    Users
                </Link>
            )}
        </div>
    );
}

export default Account;

// import * as client from "./client";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// function Account() {
//     const [account, setAccount] = useState(null);
//     const navigate = useNavigate();
//     const fetchAccount = async () => {
//         const account = await client.account();
//         setAccount(account);
//     };
//     const signout = async () => {
//         await client.signout();
//         navigate("/project/signin");
//     };

//     useEffect(() => {
//         fetchAccount();
//     }, []);
//     return (
//         <div className="w-50">
//             <h1>Account</h1>
//             {account && (
//                 <div>
//                     <input value={account.password}
//                         onChange={(e) => setAccount({
//                             ...account,
//                             password: e.target.value
//                         })} />
//                     <input value={account.firstName}
//                         onChange={(e) => setAccount({
//                             ...account,
//                             firstName: e.target.value
//                         })} />
//                     <input value={account.lastName}
//                         onChange={(e) => setAccount({
//                             ...account,
//                             lastName: e.target.value
//                         })} />
//                     <input value={account.dob}
//                         onChange={(e) => setAccount({
//                             ...account,
//                             dob: e.target.value
//                         })} />
//                     <input value={account.email}
//                         onChange={(e) => setAccount({
//                             ...account,
//                             email: e.target.value
//                         })} />
//                     <select onChange={(e) => setAccount({
//                         ...account,
//                         role: e.target.value
//                     })}>
//                         <option value="USER">User</option>
//                         <option value="ADMIN">Admin</option>
//                         <option value="FACULTY">Faculty</option>
//                         <option value="STUDENT">Student</option>
//                     </select>
//                     <button onClick={save}>
//                         Save
//                     </button>
//                     <button onClick={signout}>
//                         Signout
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
// export default Account;