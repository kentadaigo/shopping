import style from "./css/Top.module.css";
import TopSwiper from "./TopSwiper";
function TopWrapper(){
    return(
        <div className={style.TopWrapper}>
            <TopSwiper/>
        </div>
        
    )
}
export default TopWrapper;