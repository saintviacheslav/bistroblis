"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
function Basket() {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('order'));
        setOrder(data);
        console.log(order);
    }, []);

    return (
        <div>
            <h1 className={styles.title} style={{ color: "black" }}>Basket</h1>
            <div>
                {order ? order.map((item, key) => (
                    <div key={key} className={styles.card}>
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
                            </div>
                        </div>
                    </div>
                )) : <h1>No items in basket</h1>}
            </div>
            {order?<button className={styles.button} onClick={()=>{
                localStorage.removeItem('order');
                setOrder([]);
                }}>Clear</button>:null}
        </div>
    );
}
                        export default Basket;