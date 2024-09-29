import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function useDataContext() {
    return useContext(DataContext)
}

export function DataContextProvider({children}) {

    const experienceData = [
        {
            "company" : "Weebeyo Softwares",
            "post" : "Web developer - intern",
            "start" : "Aug 2024",
            "end" : "Sep 2024",
            "skills" : ["HTML", "CSS", "ReactJS", "ChartJs", "Bootstrap"],
            "description" : "Developed responsive websites using React.js for real-world projects, ensuring seamless user experience across different devices. Utilized React and CSS to implement modern, interactive front-end features and ensure high-quality design standards. Collaborated with UI/UX team to deliver web solutions that met project goals and client specifications. Focused on performance optimization, clean code practices, and ensuring the scalability of the websites for future updates."
        }
    ];

    const projectsData = [
        {
            "name" : "BhashaScript",
            "description" : "BhashaScript is a scripting language built on Python 3, designed specifically to incorporate Marathi keywords and facilitate coding for Marathi-speaking users. By integrating Marathi into the coding environment, BhashaScript provides a localized and intuitive experience.This language handles all keywords and error messages in Marathi, making it more accessible and easier to understand for native speakers. BhashaScript aims to bridge the gap between programming and regional languages, promoting inclusivity in technology.",
            "url" : "https://github.com/VaibhavCodeClub/bhashascript",
            "image" : "/images/project2.jpeg"
        },  {
            "name" : "NinjaBytes website",
            "description" : "Developed the NinjaBytes website with, ensuring user-friendliness and effective service pre- sentation. Now available online. Acquired knowledge of CPanel, WordPress, git, Domains, SSL certificates during the process.",
            "url" : "https://ninjabytes.live",
            "image" : "/images/ninjabytes.png"
        }, 
        {
            "name" : "Modern Meals website",
            "description" : "The Modern Meals and Caterers website is a responsive and user-friendly platform developed using React and Bootstrap. Designed for a catering business, the website provides an intuitive interface for users to explore catering services and browse menus.",
            "url" : "https://modern-meals.vercel.app/",
            "image" : "/images/project1.jpeg"
        },
        {
            "name" : "Learn app",
            "description" : "Built an Android application for kids to learn English pronunciation of alphabets with examples, animals, and their sounds, with an interactive and colorful interface and relatable sounds.",
            "url" : "https://github.com/VaibhavCodeClub/learn",
            "image" : "/images/project3.jpeg"
        }
    ];

    const writingsData = [
        {
            "name" : "AI Mitra",
            "year" : "-",
            "link" : "https://github.com/sapatevaibhav/Ai_Mitra",
            "image" : "/images/ai.jpg"
        },
        {
            "name" : "React fitness dashboard",
            "year" : "-",
            "link": "https://react-fitness-dashboard.vercel.app/",
            "image" : "/images/dashboard.jpg"
        },
        {
            "name" : "Our Village",
            "year" : "-",
            "link" : "https://github.com/sapatevaibhav/Our_Village",
            "image" : "/images/ourvillage.png"
        },
        {
            "name" : "Leetkode",
            "year" : "-",
            "link" : "https://github.com/sapatevaibhav/leetkode",
            "image" : "/images/leetkode.png"
        },
    ];

    const [writings, setWritings] = useState(writingsData);

    const [experience, setExperience] =  useState(experienceData);
    const [project, setProject] = useState(projectsData);

    const value = {
        experience,
        setExperience,
        project,
        setProject,
        writings,
        setWritings
    };

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>

}
