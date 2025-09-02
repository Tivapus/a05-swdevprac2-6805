"use client";

import Image from "next/image";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
    venueName: string;
    imgSrc: string;
}

export default function Card({venueName,imgSrc}: CardProps) {
    return (
        <InteractiveCard>
            <div className= "flex flex-col m-6 w-80 h-auto gap-4 p-3 bg-white border-2 border-[#6d9468] rounded-lg">
                <Image src={imgSrc} className={styles.cardImage} alt="Party Image" width={200} height={200}/>
                <div className={styles.cardText}>
                    <a href="/booking">{venueName}</a>
                </div>
            </div>
        </InteractiveCard>
    );
}