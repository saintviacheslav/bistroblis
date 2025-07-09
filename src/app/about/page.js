import styles from './page.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <div>
            <div className={styles.first}>
                <div className={styles.inner}>
                    <div className={styles.images}>
                        <div className={styles.modalbox}>
                            <div className={styles.modal}>
                                <h3>Come and visit us</h3>
                                <div className={styles.block}>
                                    <img src="/Icon.png" alt="phone" />
                                    <p>(414) 857 - 0107</p>
                                </div>
                                <div className={styles.block}>
                                    <img src="/Icon2.png" alt="mail" />
                                    <p>yummy@bistrobliss</p>
                                </div>
                                <div className={styles.block}>
                                    <img src="/Icon3.png" alt="address" />
                                    <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <h3>We provide healthy food for your family.</h3>
                        <h6>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h6>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                </div>
            </div>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>A little information<br/>for our valuable guest</h2>
                        <p className={styles.description}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        <div className={styles.cardsGrid}>
                            <div className={styles.card}>
                                <span className={styles.cardValue}>3</span>
                                <span className={styles.cardLabel}>Locations</span>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardValue}>1995</span>
                                <span className={styles.cardLabel}>Founded</span>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardValue}>65+</span>
                                <span className={styles.cardLabel}>Staff Members</span>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardValue}>100%</span>
                                <span className={styles.cardLabel}>Satisfied Customers</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Image src="/about1.png" alt="Cooking" width={380} height={480} className={styles.image} />
                    </div>
                </div>
            </section>
        </div>
    )
}