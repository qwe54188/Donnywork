import React from 'react';
import "./aimation.scss"
import styles from './homeBg.module.scss';
import { Link } from'react-router-dom';
// import WorksLists from '../../components/WorkLists';
// import WorkData from '../works.js';


export default ()=>{
    return <div className={ styles.homePage }>
        <section className={ styles.homeBg }>
            <div className="headerBox">
                <img src={require("../../assets/images/header-02.png")} alt="" className="header header-1"></img>
                <img src={require("../../assets/images/header-03.png")} alt="" className="header header-2"></img>
                <img src={require("../../assets/images/header-04.png")} alt="" className="header header-3"></img>
                <img src={require("../../assets/images/header-05.png")} alt="" className="header header-4"></img>
                <img src={require("../../assets/images/header-06.png")} alt="" className="header header-5"></img>
                <img src={require("../../assets/images/header-07.png")} alt="" className="header header-6"></img>
                <img src={require("../../assets/images/header-08.png")} alt="" className="header header-7"></img>
                <img src={require("../../assets/images/header-09.png")} alt="" className="header header-8"></img>
                <img src={require("../../assets/images/header-02.png")} alt="" className="header header-9"></img>
            </div>

            <p className="textStart">D</p>
            <p className="textStart textStart-O">O</p>
            <p className="textStart textStart-N">N</p>
            <p className="textStart textStart-N2">N</p>
            <p className="textStart textStart-Y">Y</p>

            <div className="textOpenBox">
                <p className="textOpen textOpen-D">D</p>
                <p className="textOpen textOpen-O">O</p>
                <p className="textOpen textOpen-N">N</p>
                <p className="textOpen textOpen-N2">N</p>
                <p className="textOpen textOpen-Y">Y</p>
            </div>

            <div className="personalBox">
                <p className="Ptest">PERSONAL</p> 
                <p className="Ptest Ptest-2" >DESIGN</p> 
                <p className="Ptest Ptest-3" >SERIES</p>
            </div>

            {/* <div className={ styles.point }></div> */}
            <Link to="/work" className={ styles.homeBtn }>WORKS<div className={ styles.workicon }>↓</div></Link>
        </section>
        {/* <section className={ styles.homeConent }>
            <WorksLists dataSource={ WorkData }/>
        </section> */}
    </div>
}