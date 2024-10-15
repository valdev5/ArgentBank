import React from 'react';
import User from '../user/user.jsx';
import Account from '../../components/account.jsx';
import Footer from '../../components/footer.jsx';
import AccountCardData from '../../data/accountcarddata.json'
import '../sass/main.scss';

function UserProfile () {
    return (
        <div className='profile-page'>
            <main className='bg-dark'>
                < User firstname="Tony" lastname="Jarvis" />
                {AccountCardData.map((data) => (
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
            < Footer />
        </div>
    )
}
export default UserProfile