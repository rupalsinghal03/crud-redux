import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './UserReducer';
import './toggle.css'

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users)
  const existingUser = users.filter(f => f.id == id)
  const { name, email } = existingUser[0]
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const [tabledark, settabledark] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }
  return (
    <div>
      <div className="container update-container mt-5">
        <div className="row">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
              onClick={() => {
                if (tabledark === 'table-dark') settabledark(" ")
                else settabledark("table-dark")
              }} />
          </div>
          <div className={`col-12 p-5 ${tabledark}`}>
            <form onSubmit={handleUdate}>
              <h3 className='p-3'>Update User</h3>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="enter name" value={uname} onChange={e => setName(e.target.value)} />
                <label htmlFor="floatingInput">Title</label>

              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="enter email" value={uemail} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Description</label>

              </div>

              <div className="submit-btn p-2">
                <button type="submit" className="btn">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update;
