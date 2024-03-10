import React from 'react'
import styles from './Jobs.module.scss'
const Jobs = () => {

    const jobOpenings = [
        {
            id: '100250',
            title: "UX Designer",
            description: "Designs user interfaces (UI) and user experiences (UX) for web and/or mobile applications, focusing on usability and user satisfaction."
        },
        {
            id: '100251',
            title: "Content Marketing Specialist",
            description: "Creates and manages engaging content (articles, blog posts, social media content) to attract and retain customers."
        },
        {
            id: '100252',
            title: "Marketing Analyst",
            description: "Analyzes marketing data to measure campaign effectiveness, identify trends, and optimize marketing strategies."
        },
        {
            id: '100253',
            title: "Frontend Developer",
            description: "Develops the user-facing part of web applications, ensuring a seamless and responsive user experience."
        }
    ];
    return (
        <div className={styles.areas}>
            {jobOpenings.map((item) => (
                <div className={styles.area} id={item.id}>
                    <span className={styles.name}>
                        {item.title}
                    </span>
                </div>
            ))}

                
        </div>
    )
}

export default Jobs