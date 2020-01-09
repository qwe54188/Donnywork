import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link, Route, NavLink, withRouter, HashRouter } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Work from './Workpage';
import WorkPageDetail from './WorkPageDetail';
import './nav.scss';
import WorkDetailImg from './works_detail.js';

class App extends Component {

  componentDidMount() {
    let navIcon = document.getElementById("navIcon");
    let zoom = document.getElementById('zoom');

    navIcon.addEventListener('click', function () {
      zoom.classList.toggle('active');
      navIcon.classList.toggle('cross');
    }, false);

    zoom.addEventListener('click', function () {
      zoom.classList.remove('active');
      navIcon.classList.remove('cross');
    });
  }


  render() {
    const { location } = this.props;

    return (
      <HashRouter>
      <div className={styles.App}>

        {/* 頭部區 */}
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/" className={styles.boxLeft}><img src={require("../assets/images/logo.png")} alt="" /></Link>
            <div className={styles.boxRight}>
              <a href="https://www.lymma.net/designer/profile/4517" className={styles.ui100Text}>UI100</a>
              <NavLink to="/work" activeClassName={styles.boxTestActive} className={styles.boxTest}><p>Work</p></NavLink>
              <NavLink to="/about" activeClassName={styles.boxTestActive} className={styles.boxTest}><p>About</p></NavLink>
              <Link to="/" className={location.pathname === "/" ? styles.boxTestActive : styles.boxTest}><p>Home</p></Link>
            </div>

            {/* 漢堡選單 */}
            <div className="navIcon" id="navIcon">
              <div className="navBar" > </div>
              <div className="navBar" ></div>
              <div className="navBar" ></div>
            </div>
            <ul className="navZoomout" id="zoom">
              <Link to="/" className={location.pathname === "/" ? styles.boxTestActive : styles.boxTest}><li className="navLi" style={{ borderTop: '1px solid #eee'}}>Home</li></Link>
              <NavLink to="/about" activeClassName={styles.boxTestActive} className={styles.boxTest}><li className="navLi">About</li></NavLink>
              <NavLink to="/work" activeClassName={styles.boxTestActive} className={styles.boxTest}><li className="navLi">Work</li></NavLink>
              <a href="https://www.lymma.net/designer/profile/4517" className={styles.ui100Text} ><li className="navLi" style={{color: '#2aaaff'}}>UI100</li></a>
            </ul>
          </div>
        </header>

        {/* 內容區 */}
        <section className={styles.content}>
        
              <Route path="/" exact component={HomePage} />
              <Route path="/Donnywork" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/work" exact component={Work} />
              <Route path="/work/:id" exact
                component={(routerProps) => <WorkPageDetail imgs={WorkDetailImg} {...routerProps} />}
              />
          
        </section>

        {/* 底部區 */}
        <footer className={styles.footer}>
          <p>qwe54188@gmail.com</p>
        </footer>
      </div>
      </HashRouter>
    );
  }
}

export default withRouter(App);
