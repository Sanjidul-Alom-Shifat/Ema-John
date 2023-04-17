import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Providers/AuthProviders';
import { toast } from 'react-hot-toast';

const Header = () => {

    const { user, LogOut } = useContext(AuthContext);
    console.log(user)

    const HandleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success('Sign Out Successfully')
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
            </div>
            <div>
                {
                    user && <button onClick={HandleLogOut} className='btn-header'>Sign Out</button>
                }
            </div>
        </nav>
    );
};

export default Header;