import React from "react";
import '../pages/sass/components/object.scss';
function Object ({ image, descriptionImage, title, description }) {
    return (
            <div className="feature-object">
                <img src={image} alt={descriptionImage} className="feature-object-icon"/>
                <h3 className="feature-object-title">{title}</h3>
                <p>{description}</p>
            </div>
    )
}
export default Object

