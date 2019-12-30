import React from 'react';
import { Link, } from'react-router-dom';
import styles from '../detail.module.scss';
// import img from '../../../assets/images/working/test.jpg'
export default ()=>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1><span>項目管理</span>APP</h1>
                <p>運用簡單的色彩，讓用戶者能一事情重要性來分配顏色，也能讓畫面感更豐富，操作也製作的淺顯易懂。</p>
            </div>
            <div className={styles.btnBox}>
                <Link to ="/work/4"><div className={styles.btn}>prev</div></Link> 
                <Link to ="/work/6"><div className={styles.btn2}>next</div></Link>    
            </div>
            <section className={ styles.content }>
                <img src={require("../../../assets/images/working/works_app5.png")} alt=""/>
            </section>
        </div>
    </div>
} 