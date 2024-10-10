import React from 'react';
import Header from '../../components/header.jsx';
import Form from '../../components/form.jsx';
import Footer from '../../components/footer.jsx';
import '../sass/components/signin.scss'
function Login () {
    return (
        <div className='signin-page'>
            < Header />
            <main id='bg-dark'>
                < Form />
            </main>
            < Footer />
        </div>
        
    )
}
export default Login ;