
import { useRef } from 'react';
import "./register.css"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const email=useRef(null);
    const password=useRef(null);
    const confirmPassword=useRef(null);
    const[passwordMiissMatch,setPasswordMiissMatch]=useState(false);
    const navigate=useNavigate();

    function addRegisterData(e){
        e.preventDefault();
        setPasswordMiissMatch(false);

        if(password.current.value===confirmPassword.current.value){
            const data={
                email:email.current.value,
                password:password.current.value
            }
            axios.post("https://nodejs-day5-be-44hj.onrender.com/Register",data).then((res)=>{
                console.log(res.data);
            })

            email.current.value=null;
            password.current.value=null;
            confirmPassword.current.value=null;
            navigate("/forgotpassword");
        }else{
            setPasswordMiissMatch(true);
        }
    }


    return (
        <div className='' id='register'>
            <h1 className='text-white text-center'>Register</h1>
            <div className='w-50 m-auto bg-white h-75' id='register-content'>
                <form method='post' onSubmit={addRegisterData}>
                    <div className='row align-items-center mb-3'>

                        <label htmlFor='email' className='col col-form-label'>Email</label>

                        <div className='col-sm-10'>
                            <input type={"email"} className='form-control' id='email' ref={email}></input>
                        </div>
                    </div>
                    <hr></hr>

                    <div className='row align-items-center mb-3'>

                        <label htmlFor='password' className='col col-form-label' >Password</label>

                        <div className='col-sm-10'>
                            <input type={"password"} className='form-control' id='password' ref={password}></input>
                        </div>
                    </div>
                    <hr></hr>

                    <div className='row align-items-center mb-3'>

                        <label htmlFor='confirmPassword' className='col col-form-label'>Confirm Password</label>

                        <div className='col-sm-10'>
                            <input type={"password"} className='form-control' id='confirmPassword' ref={confirmPassword}></input>
                        </div>
                    </div>
                    <hr></hr>
                    {passwordMiissMatch&&<p className='text-center text-danger'>Password Miss Match</p>}
                    <button className='btn bg-dark text-white d-flex mx-auto'>Register</button>
                </form>
            </div>

        </div>
    )
}