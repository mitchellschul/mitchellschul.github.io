import React from 'react'
import ConstructionSVG from '../assets/images/svgs/construction.svg'

const Construction = () => {
    return (
        <div class="bg-gray-100">
            <div class="min-h-screen flex flex-col justify-center items-center">
                <img src={ConstructionSVG} alt="Logo" class="mb-8 h-80 md:h-[400px]" />
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">Site is under construction</h1>
                <p class="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">I am excited to release my new website to you soon! Please check out my LinkedIn and my resume below!</p>
                <div class="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mitchell-schuldinger/" target="_blank" class="  text-black hover:text-gray font-bold py-3 px-6 rounded">LinkedIn</a>
                    <a href="mitchellschuldingerresume.pdf" target="_blank" class="border-2 border-accent-blue text-black hover:bg-accent-blue hover:text-white duration-200 ease-in-out font-bold py-3 px-6 rounded">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Construction;

