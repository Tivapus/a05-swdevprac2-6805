"use client";

import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={"/images/banner.png"} alt="Banner Image" fill />
            <div className={styles.bannerText}>
                <h2>where every event finds its venue</h2>
            </div>
        </div>
    );
}