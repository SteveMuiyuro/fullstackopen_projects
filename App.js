import React from "react"
import NavBar from "./NavBar"
import data from "./data"
import Card from "./Card"

export default function App()
{
    
    const details = data.map(detail => <Card 
    key={detail.id}
    {...detail}
    />)
     
    
    
    return(
        <div>
            <NavBar />
                <section>
                    {details}
               </section>
        </div>
    )
}