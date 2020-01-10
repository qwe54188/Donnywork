import React from 'react';
import { Link, } from 'react-router-dom';
import './detail.scss';

// export default (props) => {
//     alert(props.match.params.id)

export default ({ match: { params }, imgs}) => {

    function bigIcon() {  
        document.getElementById('contentBig').classList.add('active')
    };
    function closeBtn() {  
        document.getElementById('contentBig').classList.remove('active')
    };

    const imgDataIdx = imgs.findIndex(_img => _img.id === Number(params.id))

    return imgDataIdx > -1 ? (<div className="wrap">
         <div className="detail-box">
            <div className="detail-title">
                 <Link to="/work" className="backBtn"><div className="backBtnIcon"></div></Link>
                <h1>{imgs[imgDataIdx].title}</h1>
                <p>{imgs[imgDataIdx].brief}</p>
                <p style={{color:"#ff3319"}}>{imgs[imgDataIdx].showText}</p>
            </div>
        <div className="nextBtnBox"> 
            <Link to={`/work/${Number(params.id) > 1 ?  Number(params.id) -1 : 26}`}><div className="btn">prev</div></Link>
            <Link to={`/work/${Number(params.id) < 26 ?  Number(params.id) +1 : 1}`}><div className="btn2">next</div></Link>
        </div>
        <section className="content">
            <div className="bigIcon" id="bigIcon" onClick={ bigIcon }></div>
            <a href={imgs[imgDataIdx].link} target="_blank" rel="noopener noreferrer"><img src={imgs[imgDataIdx].cover} alt="" /></a>
        </section>

        <section className="contentBig" id="contentBig">
            <div className="closeBtn" onClick={ closeBtn }></div>
            <img src={imgs[imgDataIdx].cover} alt="" />
        </section>
        </div>
    </div>) : < div > not find </div>
}
