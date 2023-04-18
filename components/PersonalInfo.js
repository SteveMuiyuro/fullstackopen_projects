import React from "react"

export default function PersonalInfo(){
    return(
        <div className="container-1">
            <img src="./Images/photo.png" className="photo"/>
                <div className="personal-info">
                    <h3 className="name">Laura Smith</h3>
                    <h4 className="title">Frontend Developer</h4>
                    <h5 className="website">laurasmith.website</h5>
                </div>
            <div className="buttons">
                <button className="email-btn">
                    <div>
                        <img src="./Images/mail-icon.png"/>
                        <span>Email</span>
                    </div>
                </button>
                <button className="linkedIn-btn">
                <div>
                        <img src="./Images/LinkedIn-logo.png"/>
                        <span>LinkedIn</span>
                    </div>
                </button>
            </div>
        </div>
    )
}