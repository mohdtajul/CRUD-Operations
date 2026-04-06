import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://user-crud-ae5s.onrender.com')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://user-crud-ae5s.onrender.com/deleteUser/${id}`)

            // UI update
            setUsers(users.filter((user) => user._id !== id))

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
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