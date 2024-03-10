'use client'
import React, { useState } from 'react'

//css
import styles from './Carousel.module.scss'
import Image from 'next/image';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Carousel = ({ cards }: any) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === cards.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
        );
    };
    const handleDotClick = (index: any) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carousel}>
            {cards.map((item: any, index: number) => (
                <div
                    className={`${styles.card} ${styles[`card${index}`]} 
                    ${currentIndex === index ? styles.activeCard : ''}`}
                    key={index}
                >
                    <div className={styles.cHead}>
                        <Image src={item.img} alt={`profile - ${item.name}`} width={30} height={30}/>
                        <div>
                            <h1>{item.name}</h1>
                            <span>{item.company}</span>
                        </div>
                    </div>
                    <div className={styles.cBody}>
                        <div className={styles.content}>
                            <span>
                                {item.comment}
                            </span>
                        </div>

                    </div>

                </div>
            ))}

            <div className={styles.slide_direction}>
                <div className={styles.left} onClick={handlePrevious}>
                    <IoIosArrowDropleftCircle size={24} />
                </div>
                <div className={styles.right} onClick={handleNext}>
                    <IoIosArrowDroprightCircle size={24} />
                </div>
            </div>
            <div className={styles.indicator}>
                {cards.map((_: any, index: number) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );

}

export default Carousel