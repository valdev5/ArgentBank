import React from 'react';
import Banner from '../../components/banner.jsx';
import Object from '../../components/object.jsx';
import Footer from '../../components/footer.jsx';
import FeaturesItemData from '../../data/featuresitemdata.json'
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
                    {FeaturesItemData.map((data) => (
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
            < Footer />
        </div>
            
        
    )
}
export default Home