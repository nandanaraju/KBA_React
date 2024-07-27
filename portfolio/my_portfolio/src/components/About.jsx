import React from 'react'
import img from '../assets/images/me.jpg'

const About = () => {
    return (
        <div id="about" className="py-44 bg-cyan-300" >
            <h2 className="text-center font-serif text-4xl mt-4 mb-4">About Me</h2>
            <img src={img} className="mx-auto size-80 pb-4"/>
                <p className="font-serif text-2xl text-justify">Hello everybody, Myself Nandana V. I am from Kollam.I have completed my graduation in Mathematics under Kerala University.Currently doing my PG Diploma in Blockchain Technology at Kerala Blockchain Academy. I am excited to explore the new ways of learning.As a graduate student in math, I love numbers and puzzles and spend time digging into tricky math problems and exploring new ideas. Whether it's pure math or applying math to real-world problems,I enjoy the challenge of figuring things out.I am also likely involved in activities like attending math events or helping other students with their math skills. Overall, and all about uncovering the secrets of numbers and patterns.
                    I am constantly seeking opportunities to grow, learn, and connect with like-minded individuals.</p>
        </div>
    )
}

export default About