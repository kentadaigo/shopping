import style from "./css/Footer.module.css";
import sns1 from "./images/insta.png"
import sns2 from "./images/twitter.png"
import sns3 from "./images/line.png"
import MediaQuery from "react-responsive";
function Footer(){
    return(
        <>
            <MediaQuery minWidth={500}>
                <div className={style.footer}>
                    <div className={style.sns}>
                        <ul>
                            <li><img src={sns1} /></li>
                            <li><img src={sns2} /></li>
                            <li><img src={sns3} /></li>
                        </ul>
                    </div>
                    <div className={style.logo}>
                        <p>Libeol＆Shopping</p>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
                <div className={style.Sfooter}>
                    <div className={style.Ssns}>
                        <ul>
                            <li><img src={sns1} /></li>
                            <li><img src={sns2} /></li>
                            <li><img src={sns3} /></li>
                            <div className={style.clear}></div>
                        </ul>
                    </div>
                    <div className={style.Slogo}>
                        <p>Libeol＆Shopping</p>
                    </div>
                </div>
            </MediaQuery>
        </>
        
    )
}
export default Footer