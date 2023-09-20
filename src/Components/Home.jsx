import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './toggle.css'
import { deleteUser } from './UserReducer'

function Home() {
    const [tabledark, settabledark] = useState('')

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    return (
        <div>
            <div className="container table-container">
                <div className="row">
                    <h2>Theme Switcher</h2>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                            onClick={() => {
                                if (tabledark === 'table-dark') settabledark(" ")
                                else settabledark("table-dark")
                            }} />
                    </div>
                    <div className={`col-12 mt-4 table-sec p-5 ${tabledark}`}>
                        <div className="create-btn">
                            <Link to='/create' className='btn btn-success'>Create +</Link>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/update/${user.id}`} className='btn btn-primary edit-btn me-2'>Edit</Link>
                                            <Link className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home