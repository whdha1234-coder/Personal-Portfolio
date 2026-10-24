import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Data Analyst",
                    "Power BI & Tableau Specialist",
                    "SQL & Python Developer",
                    "Excel & Power Query Expert",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
