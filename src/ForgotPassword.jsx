
import { useRef } from 'react';
import "./register.css"
import axios from 'axios';
import { useState } from 'react';


export const ForgotPassword = () => {

    const email=useRef(null);
    const [userNotFound,setUserNotFound]=useState(false);
    const [userFound,setUserFound]=useState(false);
    
    function passwordForgot(e){
        setUserNotFound(false);
        setUserFound(false);
        e.preventDefault();
        const data={
            email:email.current.value
        }

        axios.post("https://nodejs-day5-be-44hj.onrender.com/ForgotPassword",data).then((res)=>{
            if(res.data.message==="false"){
                setUserNotFound(true)
            }else{
                setUserFound(true);
            }
        })
        email.current.value=null
    }


  return (
    <div className='' id='register'>
    <h1 className='text-white text-center'>Forgot Password</h1>
    <div className='w-50 m-auto bg-white h-75' id='register-content'>
        <form method='post' onSubmit={passwordForgot}>
            <div className='row align-items-center mb-3'>

                <label htmlFor='email' className='col col-form-label'>Email</label>

                <div className='col-sm-10'>
                    <input type={"email"} className='form-control' id='email' ref={email}></input>
                </div>
            </div>
            <hr></hr>

            <div className='row align-items-center mb-3'>

                <label htmlFor='password' className='col col-form-label'>Password</label>

                <div className='col-sm-10'>
                    <input type={"password"} className='form-control' id='password' disabled></input>
                </div>
            </div>
            <hr></hr>
            <button className='btn bg-dark text-white d-flex mx-auto'>Forgot Password</button>
        </form>
        <hr></hr>
        {userNotFound&&<p className='text-center text-danger'>User not found</p>}
        {userFound&&<p className='text-center text-info'>Go to your mail id click the given link</p>}
    </div>

</div>
  )
}