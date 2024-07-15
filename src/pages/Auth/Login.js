import React ,{useState} from 'react'
  import {Link , useNavigate, usenavigate} from 'react-router-dom'

export default function Login() {

const [state,setState] = useState({email: "",password:""})
const handleChange = e => setState(s=>({...s,[e.target.name]:e.target.value}))
const navigate = useNavigate()
  const handleSubmit = e => {
e.preventDefault()
let {email,password} = state
console.log("email", email)
console.log("password", password)
const formData = {email,password}
console.log("formdata",formData)
navigate("/")

  }
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4" style={{maxWidth :"400"}}>
              <h2 className='text-primary text-center mb-4'>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <input type="email" className='form-control' onChange={handleChange} placeholder='Enter Email' name='email'  />
                  </div>
                  <div className="col-12 mb-4">
                    <input type="password" className='form-control' onChange={handleChange} placeholder='Enter password' name='password'  />
                  </div>
                  <div className="col-12">
                    <button className='btn btn primary w-100'>Login</button>
                    <p className='mb-0 mt-2'>Dont have an Account <Link to='/auth/register'>Register Now</Link>
                    </p>
                  </div>
                </div>
              </form>
              </div>  
          </div>
        </div>
      </div>
    </main>
  )
}
