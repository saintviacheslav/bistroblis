import styles from "./page.module.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.first}>
        <div className={styles.inner}>
          <h1>Best food for
            your taste
          </h1>
          <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <div className={styles.buttons}>
            <button>Book A Table</button>
            <button>Explore Menu</button>
          </div>
        </div>
      </div>


      //можно прееделать нормально в отдельный компонент

      <div className={styles.menusection}>
        <div className={styles.inner}>
          <h1>Browse Our Menu</h1>
          <div className={styles.menuitems}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src="/tea.png" alt="menu1" />
              </div>
              <h2>Breakfast</h2>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#">Explore Menu</a>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src="/rice.png" alt="menu1" />
              </div>
              <h2>Main Dishes</h2>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#">Explore Menu</a>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src="/drink.png" alt="menu1" />
              </div>
              <h2>Drinks</h2>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#">Explore Menu</a>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src="/des.png" alt="menu1" />
              </div>
              <h2>Desserts</h2>
              <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#">Explore Menu</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutsection}>
        <div className={styles.inner}>
          <h1>We also offer unique services for your events</h1>
          <div className={styles.aboutitems}>
            <div className={styles.item}>
              <img src="/about1.png" alt="about1" />
              <h3>Caterings</h3>
              <p>In the new era of technology we look in the future with certainty for life.</p>
            </div>
            <div className={styles.item}>
              <img src="/about2.png" alt="about1" />
              <h3>Birthdays</h3>
              <p>In the new era of technology we look in the future with certainty for life.</p>
            </div>
            <div className={styles.item}>
              <img src="/about3.png" alt="about1" />
              <h3>Weddings</h3>
              <p>In the new era of technology we look in the future with certainty for life.</p>
            </div>
            <div className={styles.item}>
              <img src="/about4.png" alt="about1" />
              <h3>Events</h3>
              <p>In the new era of technology we look in the future with certainty for life.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
