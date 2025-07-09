"use client"
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import menuItems from "../Array";




function Card() {
    const { id } = useParams();
    const item = menuItems.find(item => item.id === parseInt(id));
    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <img src={item.image} alt="" />
                <div className={styles.content}>
                    <h2>{item.name}</h2>
                    <p>{item.longDescription}</p>
                    <div className={styles.sizeblock}>
                        <p>Size</p>
                        <div className={styles.sizes}>
                            {item.sizes.map((size, index) => (
                                <div key={index} className={styles.sizes}>
                                    <div className={styles.size}>
                                        <div className={styles.size_inner}>
                                            <h6>{size.size}</h6>
                                        </div>
                                        <p>{size.quantity} {size.unit}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.priceblock}>
                        <p>Total: </p>
                        <p>${item.price}</p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.info}>
                        <img src="/info-empty.png" alt="info" />
                        <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                    </div>
                    <a href="/basket">
                        <div className={styles.button}>
                            <button onClick={() => {
                                const data = JSON.parse(localStorage.getItem('order')) || [];
                                data.push(item);
                                localStorage.setItem('order', JSON.stringify(data))
                            }
                            }>Add to Order</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Card;