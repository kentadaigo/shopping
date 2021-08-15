import style from "./css/Header.module.css";
import Burger from "./Nav/Burger";
import image1 from "./images/kensaku.png";
import icon1 from "./images/logo1.png";
import icon2 from "./images/logo2.png"
import icon3 from "./images/logo3.png"
import MediaQuery from "react-responsive";

function Header(){
    return(
        <>
            <MediaQuery minWidth={1000}>
                <div className={style.header}>
                    <Burger />
                    <div className={style.serch}>
                        <input type="text" placeholder="キーワードで探す"/>
                        <img src={image1}/>
                    </div>
                    <div className={style.logo}>
                        <p>Libeol＆Shopping</p>
                    </div>
                    <div className={style.icons}>
                        <ul>
                            <li className={style.icon1}><img src={icon1}/></li>
                            <li className={style.icon2}><img src={icon2}/></li>
                            <li className={style.icon3}><img src={icon3}/></li>
                        </ul>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={670} maxWidth={1000}>
                <div className={style.header}>
                    <Burger />
                    <div className={style.Tlogo}>
                        <p>Libeol＆Shopping</p>
                    </div>
                    <div className={style.Ticons}>
                        <ul>
                            <li className={style.Ticon1}><img src={icon1}/></li>
                            <li className={style.Ticon2}><img src={icon2}/></li>
                            <li className={style.Ticon3}><img src={icon3}/></li>
                        </ul>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={670}>
                <div className={style.header}>
                    <Burger />
                    <div className={style.Slogo}>
                        <p>Libeol＆Shopping</p>
                    </div>
                
                </div>
            </MediaQuery>
        </>
        
        
    )
}
export default Header;