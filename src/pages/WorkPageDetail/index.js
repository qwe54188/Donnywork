import React from 'react';
import { Link, } from 'react-router-dom';
import styles from './detail.module.scss';

// export default (props) => {
//     alert(props.match.params.id)
export default ({ match: { params }, imgs }) => {
    const imgDataIdx = imgs.findIndex(_img => _img.id === Number(params.id))
    return imgDataIdx > -1 ? (<div className={styles.wrap}>
        <img src={imgs[imgDataIdx].cover} alt="" />
        <div className={styles.box}>
            {imgs[imgDataIdx].title}
        </div>
        <Link to={`/work/${Number(params.id) - 1}`}><div className={styles.btn}>prev</div></Link>
        <Link to={`/work/${Number(params.id) + 1}`}><div className={styles.btn2}>next</div></Link>
    </div>) : < div > not found image</div >
}