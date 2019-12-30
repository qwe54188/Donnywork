import React from 'react';
import styles from'./About.module.scss';

export default ()=> {

    // const color ={
    //     color: '#fff',
    //     background: '#fff',
    // }
    // const 

    return <div className={styles.aboutPage}>
        <div className={styles.aboutArea}>
            <div className="title">
                <div className="line"></div>
                <p className="titleText">About</p>
            </div>
            <div className={styles.myImg}>
                <img src={ require("../../assets/images/user.png") } alt="" className={ styles.myPhoto } />
                <h2>方嘉勛</h2>
                <p>UX / UI 網頁設計師</p>
            </div>
            <div className={ styles.textAbout }>
                <p>
                    我是方嘉勛，出社會工作2年多，工作職位是網頁設計師；
                    <br/>
                    出社會的第一份工作在台中，在這學習到對色彩的敏銳度、網頁製作細節、設計規範等等...
                    讓我從網頁零基礎到已經能獨立完成設計製作， 而在這不只學習到設計也學習到些程式語言(HTML、CSS)，
                    讓自己所設計的東西做成實體，而不僅在上班學習，我也在下班之餘時間參加了UI100活動，來增進自己的設計；
                    <br/>
                    第二份工作在台北，在這學習到與前端工程師的配合，對於整個設計流程更加的了解，而第一份較多WEB上的開發與第二份不同較多為手機開發，
                    也讓我學到更多手機設計的細節， 利用下班時間學習前端，學會使用GIT，以及基礎的JS，和基本REACT框架，讓我能更了解在開發上的問題，
                    輔助我在設計時的想法及流程；
                    <br/>
                    未來目標可以朝更廣的設計讓增進，以及提升程式的成熟度。
                </p>
            </div>
        </div>

        {/* 工作經驗 */}

        <div className={styles.experienceArea}>
            <div className="title">
                <div className="line" style={{background: "#fff"}}></div>
                <p className="titleText" style={{color: "#fff"}}>Experience</p>
            </div>
            <div className={styles.experienceBox}>
                <div className={styles.box}>
                    <div className={ styles.boxRight }>
                        <div className={ styles.expText }>
                            <p>工作經驗 1 :</p>
                        </div>
                        <div className={ styles.jobText }>
                            <p>2017 / 08~ 2019 / 02</p>
                            <p className={ styles.jobTextIn }>格子科技</p>
                        </div>
                    </div>
                    <div className={ styles.boxLeft }>
                        <h3>工作內容：</h3>
                        <p>1. 設計網頁介面、手機介面 2. 設計廣告圖片 3. 網頁切版/動畫</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={ styles.boxRight }>
                        <div className={ styles.expText }>
                            <p>工作經驗 2 :</p>
                        </div>
                        <div className={ styles.jobText }>
                            <p>2019 / 02~ 仍在職</p>
                            <p className={ styles.jobTextIn }>京麒科技</p>
                        </div>
                    </div>
                    <div className={ styles.boxLeft }>
                        <h3>工作內容：</h3>
                        <p>1. 設計網頁介面、手機介面 2. 設計廣告圖片 3. 網頁切版/動畫</p>
                    </div>
                </div>
                <div className={styles.box} style={{border:"0"}}>
                    <div className={ styles.boxRight }>
                        <div className={ styles.expText }>
                            <p>進修活動 :</p>
                        </div>
                        <div className={ styles.jobText }>
                            <p>2018 / 04~ 2018 / 09</p>
                            <p className={ styles.jobTextIn }>UI 設計100</p>
                        </div>
                    </div>
                    <div className={ styles.boxLeft }>
                        <h3>活動內容：</h3>
                        <p>每天設計出一個介面，持續100天</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 技能 */}

        <div className={styles.skillsArea}>
            <div className="title">
                <div className="line"></div>
                <p className="titleText">Skills</p>
            </div>
            <div className={styles.skillsImg}>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
            </div>
        </div>
    </div>
}