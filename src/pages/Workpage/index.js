import React from 'react';
import styles from'./workPage.module.scss';
import WorkLists from '../../components/WorkLists';
import WorkData from '../works.js';

export default ()=> {
    return <div className={styles.workPage}>
        <h1>DESIGN WORKS</h1>
        <WorkLists dataSource={ WorkData } />
    </div>
}