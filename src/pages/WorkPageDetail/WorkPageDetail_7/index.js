import React from 'react';
import { Link, } from'react-router-dom';
import styles from '../detail.module.scss';
// import img from '../../../assets/images/working/test.jpg'
export default ()=>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1><span>鬧鐘</span>APP</h1>
                <p>設計黑白簡單風格，背景會隨著時間也跟著改變</p>
            </div>
            <div className={styles.btnBox}>
                <Link to ="/work/6"><div className={styles.btn}>prev</div></Link> 
                <Link to ="/work/1"><div className={styles.btn2}>next</div></Link>    
            </div>
            <section className={ styles.content }>
                <img src={require("../../../assets/images/working/works_app7.png")} alt=""/>
            </section>
        </div>
    </div>
} 