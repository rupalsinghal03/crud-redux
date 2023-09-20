import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';
import './toggle.css'
function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')
    const [tabledark, settabledark] = useState('')
    const users = useSelector((state) => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email,status }))
        navigate('/')
    }
    return (
        <div>
            <div className="container create-container p-5">
                <div className="row">
                    <div className="col-12">
                        <h2>Theme Switcher</h2>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                onClick={() => {
                                    if (tabledark === 'table-dark') settabledark(" ")
                                    else settabledark("table-dark")
                                }} />
                        </div>
                        <form onSubmit={handleSubmit} className={`p-5 ${tabledark}`}>
                            <h3 className='p-3'>Add new Note</h3>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="enter title" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="floatingInput">Title</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingTextarea" placeholder="enter description" onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingTextarea">Description</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingTextarea" placeholder="enter Status" onChange={(e) => setStatus(e.target.value)} />
                                <label htmlFor="floatingTextarea">Status</label>

                            </div>

                            <div className="submit-btn p-2">
                                <button type="submit" className="btn">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create