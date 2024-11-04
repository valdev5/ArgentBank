import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/argentBankLogo.webp';
import { logout } from '../redux/actions/auth';
import '../pages/sass/components/header.scss';

function Header() {
    const isConnected = useSelector((state) => state.auth.isConnected);
    const userName = useSelector((state) => state.user.userData.username); // Récupère le nom d'utilisateur depuis Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    };

    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Bank Logo" />
                </Link> 
                {isConnected ? (
                    <div className='connected'>
                        <Link to='/Profile'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>{userName}</p> {/* Affiche le nom d'utilisateur dynamique */}
                        </Link>
                        <Link to='/' onClick={logoutHandler}>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p>Sign out</p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/login'>
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    ); 
}

export default Header;
