import React from 'react';
import Banner from '../../components/banner.jsx';
import Object from '../../components/object.jsx';
import FeaturesObjectData from '../../data/featuresobjectdata.json'
import iconChat from '../../assets/img/icon-chat.webp';
import iconMoney from '../../assets/img/icon-money.webp';
import iconSecurity from '../../assets/img/icon-security.webp';
function Home () {

    const imageData = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }

    return (
        <div className='homepage'>
            <main>
                <Banner />
                <section className="features">
                    <h2 className='sr-only'>Features</h2>
                    {FeaturesObjectData.map((data) => (
                        < Object 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
        </div>
            
        
    )
}
export default Home