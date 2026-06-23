import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const url = `${import.meta.env.VITE_BACKEND_URL}`

        console.log("URL =", url)

        axios.get(url)
            .then(result => {
                console.log(result.data)
                setUsers(result.data)
            })
            .catch(err => {
                console.log(err.response)
                console.log(err)
            })

    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/deleteUser/${id}`)

            // UI update
            setUsers(users.filter((user) => user._id !== id))

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div className="text-center mb-4">

                    <h1
                        className="fw-bold mb-2"
                        style={{
                            fontSize: "3rem",
                            background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            letterSpacing: "1px"
                        }}
                    >
                        ✨ List of Users
                    </h1>

                    <p
                        className="text-secondary"
                        style={{ fontSize: "18px" }}
                    >
                        Manage and organize your users
                    </p>

                    <hr
                        style={{
                            width: "180px",
                            margin: "0 auto",
                            border: "2px solid #7c3aed",
                            opacity: 1
                        }}
                    />
                </div>
                <Link to="/create" className='btn btn-success'>Add User+</Link>
                <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                users.map((user) => {
                                    return <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`/update/${user._id}`} className='btn btn-success me-2'>Update</Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users;