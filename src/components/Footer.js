import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.brandSection}>
                    <div className={styles.logoRow}>
                        <img src="/logo.png" alt="Bistro Bliss Logo" className={styles.logo} />
                        <span className={styles.brandName}>Bistro Bliss</span>
                    </div>
                    <p className={styles.description}>
                        In the new era of technology we look a in the future with certainty and pride to for our company and.
                    </p>
                </div>
                <div className={styles.linksSection}>
                    <div className={styles.linkColumn}>
                        <h4>Pages</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Delivery</li>
                        </ul>
                    </div>
                    <div className={styles.linkColumn}>
                        <h4>Utility Pages</h4>
                        <ul>
                            <li>Start Here</li>
                            <li>Styleguide</li>
                            <li>Password Protected</li>
                            <li>404 Not Found</li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                            <li>View More</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.instagramSection}>
                    <h4>Follow Us On Instagram</h4>
                    <div className={styles.instagramGrid}>
                        <img src="/about1.png" alt="Instagram 1" />
                        <img src="/about2.png" alt="Instagram 2" />
                        <img src="/about3.png" alt="Instagram 3" />
                        <img src="/about4.png" alt="Instagram 4" />
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <hr className={styles.divider} />
                <p className={styles.copyright}>
                    Copyright © 2023 Hashtag Developer. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
export default Footer;