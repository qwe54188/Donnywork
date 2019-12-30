import React from 'react';
import styles from './work.module.scss';
import { Link } from 'react-router-dom';


export default ({ dataSource })=>{
    
    return <div className={ styles.workList }>
        <ul>
            {
                dataSource && dataSource.map(item=>
                    <li>
                        <Link to={`/work/${item.id}`}>
                            <img src={item.cover} alt="" />
                            <div className={ styles.workbrief }>
                                <h3>{item.title}</h3>
                                <p>{item.brief}</p>
                            </div>
                        </Link>
                    </li>    
                )
            }
        </ul>
    </div>
}