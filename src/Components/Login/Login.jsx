import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { user, LoginUser, LogOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        LoginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Login Successful');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
        })

    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={HandleLogin}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="password" required />
                    <p onClick={()=>{setShow(!show)}}>
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small>
                    </p>
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='paragraph'><small>New to Ema-john? <Link className='text-color' to="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;