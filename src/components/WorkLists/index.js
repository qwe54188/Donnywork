import React,{ useEffect, useState }  from 'react';
import styles from './work.module.scss';
import { Link } from 'react-router-dom';
import './workLi.scss'

export default ({ dataSource })=>{

    useEffect(()=>{
        const imgAll = document.querySelectorAll('.solveimg');
        const workBox =document.querySelector('#content');
        console.log(workBox)
        workBox.addEventListener('scroll', function () {
            var scorll = workBox.scrollTop;
            var viewHeight = window.innerHeight;
            var outerHeight = window.outerHeight;
            var anchor = scorll + viewHeight - outerHeight + 800;
            console.log(anchor)
            imgAll.forEach(img => {
                var offset = img.offsetTop; 
                offset < anchor ? img.classList.add('active') : img.classList.remove('active');
            });
        });

        },[])  
          
        return <div className={ styles.workList } id="workBox">
            <ul>
                {
                    dataSource && dataSource.map(item=>
                        <li className="solveimg">
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
