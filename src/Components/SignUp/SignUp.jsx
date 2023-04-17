import React, { useContext } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProviders';

const SignUp = () => {

    const { CreatUser } = useContext(AuthContext);

    const HandleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password=form.confirmpassword.value
        console.log(email, password, confirm_password);

        if (password !== confirm_password) {
            toast.error('Your Password Did Not Match ');
            return;
        }
        else if (password.length < 6) {
            toast.error('Password Must Be 6 Characters Or Longer');
            return
        }

        CreatUser(email, password)
            .then((result) => {
                const signupUser = result.user;
                console.log(signupUser);
                toast.success('Sign Up Successfully');
                form.reset();
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
        })

    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={HandleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email"  required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirmpassword" id="password1" required/>
                </div>
                <input className='btn-login' type="submit" value="Sign Up" />
            </form>
            <p className='paragraph1'><small>Already have an account? <Link className='text-color' to="/login">Login</Link></small></p>
        </div>
    );
};

export default SignUp;