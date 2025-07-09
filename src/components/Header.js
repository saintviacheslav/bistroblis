import styles from "./header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.topheader}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <div className={styles.phone}>
                            <img src="/Icon.png" alt="phone" />
                            <p>(414) 857 - 0107</p>
                        </div>
                        <div className={styles.email}>
                            <img src="/Icon2.png" alt="mail" />
                            <p>yummy@bistrobliss</p>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <div className={styles.box}>
                            <img src="/f.png" alt="facebook" />
                        </div>
                        <div className={styles.box}>
                            <img src="/logo-instagram.png" alt="instagram" />
                        </div>
                        <div className={styles.box}>
                            <img src="/x.png" alt="twitter" />
                        </div>
                        <div className={styles.box}>
                            <img src="/logo-github.png" alt="github" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomheader}>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <img src="/logo.png" alt="logo" />
                        <p>Bistro Bliss</p>
                    </div>
                    <div className={styles.navbar}>
                        <div className={styles.item}><a href="/">Home</a></div>
                        <div className={styles.item}><a href="/about">About</a></div>
                        <div className={styles.item}><a href="/menu">Menu</a></div>
                    </div>
                    <div className={styles.button}>
                        <button>Book A Table</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;