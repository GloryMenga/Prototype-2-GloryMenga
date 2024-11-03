import React, { useEffect, useState } from "react";

function ProgressBar(){
    const [scrollPercentage, setScrollPercentage] = useState(20);

    useEffect(()=>{

        const handleScroll = ()=>{
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollY = window.scrollY;

                const scrollPercent = (scrollY / (documentHeight - windowHeight))*100

                setScrollPercentage(scrollPercent)
                console.log(scrollPercent)
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }


    },[])


    return(
        <div 
            id="progress-container" style={{height: "8px", width: "100%", backgroundColor:"black",
            position: "fixed", top:"0", left:"0", right:"0", zIndex:"100"}}
        >
            <div className="progress-fill" 
            style={{height:"100%", 
            backgroundColor:"white", 
            width: `${scrollPercentage}%`}}>
                {" "}
            </div>
        </div>
    )
}

export default ProgressBar