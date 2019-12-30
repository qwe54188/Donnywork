import React from 'react';
import { Link, } from'react-router-dom';
import styles from '../detail.module.scss';

export default ()=>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1><span>i88</span>GAME</h1>
                <p>製作遊戲網站APP，因商品客戶群年紀偏大，所以製作時將按鈕做得較大，讓客戶好操作，也運用圖片來襯托每一個款遊戲的豐富感。</p>
            </div>
            <div className={styles.btnBox}>
                <Link to ="/work/1"><div className={styles.btn}>prev</div></Link> 
                <Link to ="/work/3"><div className={styles.btn2}>next</div></Link>  
            </div>
            <section className={ styles.content }>
                <img src={require("../../../assets/images/working/works_app2.jpg")} alt=""/>
            </section>
        </div>
    </div>
} 