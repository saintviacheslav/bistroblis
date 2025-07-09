import styles from './page.module.css';
import Image from 'next/image';
import  menuItems  from './Array';
export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.inner}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                <div className={styles.categories}>
                    <div className={styles.category}>
                        <div className={styles.image}>
                            <p>🍱</p>
                        </div>
                        <p>ALL</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.image}>
                            <p>☕</p>
                        </div>
                        <p>Lemonade</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.image}>
                            <p>🥙</p>
                        </div>
                        <p>Main Courses</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.image}>
                            <p>🍰</p>
                        </div>
                        <p>Dessert</p>
                    </div>
                </div>
                <div className={styles.menuitems}>
                    {menuItems.map((item,key) => 
                    <a key={key} href={`/menu/${item.id}`}>
                        <div key={key} className={styles.item}>
                        <Image className={styles.rounded} src={item.image} alt="menu" width={306} height={230} />
                        <h6>${item.price}</h6>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                    </div>
                    </a>)}
                </div>
            </div>
        </div>
    )
}