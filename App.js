import React from "react"
import PersonalInfo from "./components/PersonalInfo"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div className="container">
            <PersonalInfo />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}