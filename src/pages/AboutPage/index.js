import React from 'react';
import styles from './About.module.scss';

export default () => {

    return <div className={styles.aboutPage}>
        <div className={styles.aboutArea}>
            <div className="title">
                <div className="line"></div>
                <p className="titleText">About</p>
            </div>
            <div className={styles.myImg}>
                <img src={require("../../assets/images/user.jpg")} alt="" className={styles.myPhoto} />
                <h2>方嘉勛</h2>
                <p>UX / UI 網頁設計師</p>
            </div>
            <div className={styles.textAbout}>
                <p>
                    您好！我是方嘉勛，出社會工作7年多，工作職位是網頁設計師；
                    <br />
                    剛出社會工作在台中，在這學習到對色彩的敏銳度、網頁製作細節、設計規範等等...讓我從網頁零基礎到已經能獨立完成設計製作，
                    而在這不只學習到設計也學習到些程式語言(HTML、CSS)，讓自己所設計的東西做成實體，而不僅在上班學習，我也在下班之餘時間參加了UI100活動，
                    來增進自己的設計；
                    <br />
                    之後換到台北工作，得到更專業的設計知識以及技能，學習使用sketch強化我在設計上的製作，利用zeplin軟體讓我與前端工程師有更良好的互動，
                    對於整個設計流程更加的了解，也利用下班時間學習前端，學會使用GIT，以及基礎的JS和基本REACT框架，讓我能更了解在開發上的問題，
                    輔助我在設計時的想法及流程;
                    <br />
                    未來目標可以朝更廣的設計讓增進，不僅是網頁的UI設計，也能學習到美術UI設計等...更多元的設計方向，希望貴司給我一個機會，
                    讓我能在貴司良好環境下持續不斷的充實自己並和公司一同成長。
                </p>
            </div>
        </div>

        {/* 工作經驗 */}

        <div className={styles.experienceArea}>
            <div className="title">
                <div className="line" style={{ background: "#fff" }}></div>
                <p className="titleText" style={{ color: "#fff" }}>Experience</p>
            </div>
            <div className={styles.experienceBox}>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <div className={styles.expText}>
                            <p>工作經驗 1 :</p>
                        </div>
                        <div className={styles.jobText}>
                            <p>2017/08 ~ 2019/02</p>
                            <p className={styles.jobTextIn}>格子科技</p>
                        </div>
                    </div>
                    <div className={styles.boxLeft}>
                        <h3>工作內容：</h3>
                        <p>1. 設計網頁介面、手機介面 2. 設計廣告圖片 3. 網頁切版/動畫</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <div className={styles.expText}>
                            <p>工作經驗 2 :</p>
                        </div>
                        <div className={styles.jobText}>
                            <p>2019/02 ~ 2020/02</p>
                            <p className={styles.jobTextIn}>京麒科技</p>
                        </div>
                    </div>
                    <div className={styles.boxLeft}>
                        <h3>工作內容：</h3>
                        <p>1. 設計網頁介面、手機介面 2. 網頁切版/動畫</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <div className={styles.expText}>
                            <p>工作經驗 3 :</p>
                        </div>
                        <div className={styles.jobText}>
                            <p>2020/02 ~ 2020/11</p>
                            <p className={styles.jobTextIn}>大牛科技</p>
                        </div>
                    </div>
                    <div className={styles.boxLeft}>
                        <h3>工作內容：</h3>
                        <p>1. 設計網頁、手機介面套版</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <div className={styles.expText}>
                            <p>工作經驗 4 :</p>
                        </div>
                        <div className={styles.jobText}>
                            <p>2020/11 ~ 2021/07</p>
                            <p className={styles.jobTextIn}>耐思人工智能科技</p>
                        </div>
                    </div>
                    <div className={styles.boxLeft}>
                        <h3>工作內容：</h3>
                        <p>1. 維護及美化網頁 2. 設計廣告圖片 3. 網頁切版/動畫</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <div className={styles.expText}>
                            <p>工作經驗 5 :</p>
                        </div>
                        <div className={styles.jobText}>
                            <p>2021/08 ~ 2022/07</p>
                            <p className={styles.jobTextIn}>華奧科技公司</p>
                        </div>
                    </div>
                    <div className={styles.boxLeft}>
                        <h3>工作內容：</h3>
                        <p>1. 維護及美化網頁 2. 設計廣告圖片 </p>
                    </div>
                </div>
                <div className={styles.box} style={{ border: "0" }}>
                    <div className={styles.boxRight}>
                        <div className={styles.expText}>
                            <p>工作經驗 6 :</p>
                        </div>
                        <div className={styles.jobText}>
                            <p>2022/08 ~ 仍在職</p>
                            <p className={styles.jobTextIn}>尤米爾科技有限公司</p>
                        </div>
                    </div>
                    <div className={styles.boxLeft}>
                        <h3>工作內容：</h3>
                        <p>1. 製作活動頁面 2. 設計廣告圖片</p>
                    </div>
                </div>
                {/* <div className={styles.box} style={{ border: "0" }}>
                    <div className={styles.boxRight}>
                        <div className={styles.expText}>
                            <p>進修活動 :</p>
                        </div>
                        <div className={styles.jobText}>
                            <p>2018/04 ~ 2018/09</p>
                            <p className={styles.jobTextIn}>UI 設計100</p>
                        </div>
                    </div>
                    <div className={styles.boxLeft}>
                        <h3>活動內容：</h3>
                        <p>每天設計出一個介面，持續100天</p>
                    </div>
                </div> */}
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
