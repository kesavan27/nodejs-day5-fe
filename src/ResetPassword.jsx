
import { useEffect } from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'

export const ResetPassword = () => {

    const email=useRef(null)
    const newPassword=useRef(null);
    const confirmNewPassword=useRef(null);

    const [userNotFound,setUserNotFound]=useState(false);
    const [passwordUpdated,setPasswordUpdated]=useState(false);

    const {str}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        const data={
            str:str
        }
        console.log(data)
        axios.post("https://nodejs-day5-be-44hj.onrender.com/ForgotPassword/RandomString",data).then((res)=>{
            if(res.data.message==='Success'){

            }else{
                alert("user not found");
                navigate("/forgotpassword");
            }
        })
    },[])

    function passwordReset(e){
        e.preventDefault();
        setUserNotFound(false);
        setPasswordUpdated(false);
        if(newPassword.current.value===confirmNewPassword.current.value){
            const data={
                email:email.current.value,
                password:newPassword.current.value
            }

            axios.post("https://nodejs-day5-be-44hj.onrender.com/ForgotPassword/ResetPassword",data).then((res)=>{
                if(res.data.message=="Password updated"){
                    setPasswordUpdated(true);
                }else{
                    setUserNotFound(true);
                }
            })
        }
    }

  return (
    <div className='' id='register'>
            <h1 className='text-white text-center'>Reset Password</h1>
            <div className='w-50 m-auto bg-white h-75' id='register-content'>
                <form method='post' onSubmit={passwordReset}>
                    <div className='row align-items-center mb-3'>

                        <label htmlFor='email' className='col col-form-label'>Email</label>

                        <div className='col-sm-10'>
                            <input type={"email"} className='form-control' id='email' ref={email}></input>
                        </div>
                    </div>
                    <hr></hr>

                    <div className='row align-items-center mb-3'>

                        <label htmlFor='password' className='col col-form-label'>New Password</label>

                        <div className='col-sm-10'>
                            <input type={"password"} className='form-control' id='password' ref={newPassword}></input>
                        </div>
                    </div>
                    <hr></hr>

                    <div className='row align-items-center mb-3'>

                        <label htmlFor='confirmPassword' className='col col-form-label'>Confirm New Password</label>

                        <div className='col-sm-10'>
                            <input type={"password"} className='form-control' id='confirmPassword' ref={confirmNewPassword}></input>
                        </div>
                    </div>
                    <hr></hr>
                    <button className='btn bg-dark text-white d-flex mx-auto'>Reset</button>
                </form>
                <hr></hr>
                {userNotFound&&<p className='text-center text-danger'>User not found</p>}
                {passwordUpdated&&<p className='text-center text-danger'>Password update successfully</p>}
            </div>

        </div>
  )
}