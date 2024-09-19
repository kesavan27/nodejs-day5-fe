import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './Register'
import { ForgotPassword } from './ForgotPassword'
import { ResetPassword } from './ResetPassword'

export const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/resetpassword/:str' element={<ResetPassword></ResetPassword>}></Route>
    </Routes>
    </BrowserRouter>
  )
}