import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import GreenError from '../../assets/img/404.png';
import '../sass/components/error.scss';
function Error () {
    return (
        <div className="error-page">
            <main>
                <section className="error">
                    <h2 className="sr-only">Error 404</h2>
                    <img src={GreenError} alt="error 404" className="green-error"/>
                    <p className="text-error">The requested page doesn't exist...</p>
                    <p className="text-error">Please return to homepage</p>
                    < Link to="/">
                        <button className="button-404">Back to the homepage</button>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Error