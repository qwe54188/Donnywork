import React,{ Component } from 'react';
import styles from'./App.module.scss';
import { Link,Route,NavLink,withRouter } from'react-router-dom';
import HomePage from'./HomePage';
import AboutPage from'./AboutPage';
import Work from'./Workpage';
import WorkPageDetail from'./WorkPageDetail';
//內容頁面------------------------------------
// import WorkPageDetail1 from'./WorkPageDetail/WorkPageDetail_1';
// import WorkPageDetail2 from'./WorkPageDetail/WorkPageDetail_2';
// import WorkPageDetail3 from'./WorkPageDetail/WorkPageDetail_3';
// import WorkPageDetail4 from'./WorkPageDetail/WorkPageDetail_4';
// import WorkPageDetail5 from'./WorkPageDetail/WorkPageDetail_5';
// import WorkPageDetail6 from'./WorkPageDetail/WorkPageDetail_6';
// import WorkPageDetail7 from'./WorkPageDetail/WorkPageDetail_7';

class App extends Component {
    
    componentDidMount(){
      let navIcon = document.getElementById("navIcon");
      let zoom = document.getElementById('zoom');
        console.log(navIcon);
        console.log(zoom);
        navIcon.addEventListener('click', function(){
          zoom.classList.toggle('active');
        }, false);
    }

    render(){
      const { location }=this.props;

      return (
      <div className={styles.App}>
        
        {/* 頭部區 */}
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to ="/" className={styles.boxLeft}><img src={require("../assets/images/logo.png")} alt=""/></Link>
            <div className={styles.boxRight}>
              <a href="https://www.lymma.net/designer/profile/4517" className={styles.ui100Text}>UI100</a>
              <NavLink to ="/work" activeClassName={styles.boxTestActive} className={styles.boxTest}><p>Work</p></NavLink>
              <NavLink to ="/about" activeClassName={styles.boxTestActive} className={styles.boxTest}><p>About</p></NavLink>
              <Link to ="/" className={location.pathname==="/" ? styles.boxTestActive : styles.boxTest}><p>Home</p></Link>
            </div>

            {/* 漢堡選單 */}
            <div className={styles.navIcon} id="navIcon">
              <div className={styles.navBar}></div>
              <div className={styles.navBar}></div>
              <div className={styles.navBar}></div>
            </div>
            <ul className={ styles.navZoomout } id="zoom">
              <a href="https://www.lymma.net/designer/profile/4517" className={styles.ui100Text} ><li style={{borderTop: '1px solid #eee',color:'#2aaaff'}}>UI100</li></a>
              <Link to ="/" className={location.pathname==="/" ? styles.boxTestActive : styles.liTest}><li>Home</li></Link>
              <NavLink to ="/about" activeClassName={styles.boxTestActive} className={styles.liTest}><li>About</li></NavLink>
              <NavLink to ="/work" activeClassName={styles.boxTestActive} className={styles.liTest}><li>Work</li></NavLink>
            </ul>
          </div>
        </header>

        {/* 內容區 */}
        <section className={styles.content}>
          <Route path="/" exact component={ HomePage }/>
          <Route path="/about" exact component={ AboutPage }/>
          <Route path="/work" exact component={ Work }/>
          <Route path="/work/:id" exact component={ WorkPageDetail }/>
          {/* <Route path="/work/1" exact component={ WorkPageDetail1 }/>
          <Route path="/work/2" exact component={ WorkPageDetail2 }/>
          <Route path="/work/3" exact component={ WorkPageDetail3 }/>
          <Route path="/work/4" exact component={ WorkPageDetail4 }/>
          <Route path="/work/5" exact component={ WorkPageDetail5 }/>
          <Route path="/work/6" exact component={ WorkPageDetail6 }/>
          <Route path="/work/7" exact component={ WorkPageDetail7 }/> */}
         
        </section>

        {/* 底部區 */}
        <footer className={styles.footer}>
          <p>qwe54188@gmail.com</p>
        </footer>

      </div>
    );
  }
}

export default withRouter(App);
