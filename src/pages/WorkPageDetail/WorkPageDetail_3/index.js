import React from 'react';
import { Link, } from'react-router-dom';
import styles from '../detail.module.scss';
// import img from '../../../assets/images/working/test.jpg'
export default ()=>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1><span>計算機</span>APP</h1>
                <p>產品需要製作體育遊戲APP，在製作時版面背景利用了體育場來當背景， 而切換icon利用真實球種，來增加玩家對產品的視覺感。</p>
            </div>
            <div className={styles.btnBox}>
                <Link to ="/work/2"><div className={styles.btn}>prev</div></Link> 
                <Link to ="/work/4"><div className={styles.btn2}>next</div></Link>  
            </div>
            <section className={ styles.content }>
                <img src={require("../../../assets/images/working/works_app3.jpg")} alt=""/>
            </section>
        </div>
    </div>
} 