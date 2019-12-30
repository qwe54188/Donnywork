import React from 'react';
import { Link, } from'react-router-dom';
import styles from '../detail.module.scss';
// import img from '../../../assets/images/working/test.jpg'
export default ()=>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1><span>用戶資料</span>APP</h1>
                <p>在畫面上讓用戶者能容易了解自己目前的追蹤人數，也能輕易的選擇想觀看的照片，和快速瀏攬留言與回覆。</p>
            </div>
            <div className={styles.btnBox}>
                <Link to ="/work/3"><div className={styles.btn}>prev</div></Link> 
                <Link to ="/work/5"><div className={styles.btn2}>next</div></Link>
            </div>
            <section className={ styles.content }>
                <img src={require("../../../assets/images/working/works_app4.jpg")} alt=""/>
            </section>
        </div>
    </div>
} 