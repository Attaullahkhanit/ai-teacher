import React from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { FcKey } from 'react-icons/fc';
import { RiLockPasswordFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';

function Register() {
        const [name, setName] = useState()
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

        const registerObjData = {
            name: name,
            email: email,
            passw: password
        }

        const registerData = () => {
          console.log(registerObjData)
        }

  return (
    <> 
        <Navbar/>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black border-0 rounded-0">
                  <div className="card-body p-md-5 mb-4">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <form className="mx-1 mx-md-4 p-3 ">
                        <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
 
                          <div className="d-flex flex-row align-items-center mb-4">
                            <FaUserPlus size={25} style={{color: '#273661'}}/>
                            <div className="form-outline flex-fill mx-2 mb-0">
                              <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <HiOutlineMail size={25} style={{color: '#ea4335'}}/>
                            <div className="form-outline flex-fill mx-2 mb-0">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <RiLockPasswordFill size={25} className='text-success'/>
                            <div className="form-outline flex-fill mx-2 mb-0">
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <FcKey size={25}/>
                            <div className="form-outline flex-fill mx-2 mb-0">
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Re-Password"/>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center  mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" for="form2Example3">
                              I agree all statements in <Link href="#!">Terms of service</Link>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary shadow w-100 py-2 px-5 fw-bold" onClick={registerData}>Register</button>
                          </div>

                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid" alt="Sample image"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
    </>
  )
}

export default Register