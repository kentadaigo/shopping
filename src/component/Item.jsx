import style from "./css/Item.module.css"
import icon from "./images/heart3.png"
import icon2 from "./images/heart2.png"
import {useState} from "react";
import MediaQuery from "react-responsive";
function Item(props){
    const [heart,setHeart]=useState(false)

    const heratChange=()=>{
        setHeart(!heart)
    }
    return(
        <>  

            <MediaQuery minWidth={1300}>
                <div className={style.Item}>
                    <div className={style.top}>
                        <img className={style.ItemImg} src={props.img}/>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.cost}>￥{props.cost}<span>(税込)</span></p>
                        <div className={style.heart} onClick={heratChange}>
                            {heart ?
                                <img src={icon2} />
                                :
                                <img src={icon} />
                            }
                            
                        </div>
                        <button>カートに入れる</button>
                        <div className={style.clear}></div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={1000} maxWidth={1300}>
                <div className={style.Item}>
                    <div className={style.top2}>
                        <img className={style.ItemImg} src={props.img}/>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.cost}>￥{props.cost}<span>(税込)</span></p>
                        <div className={style.heart} onClick={heratChange}>
                            {heart ?
                                <img src={icon2} />
                                :
                                <img src={icon} />
                            }
                            
                        </div>
                        
                        <button>カートに入れる</button>
                        <div className={style.clear}></div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={850} maxWidth={1000}>
                <div className={style.Item}>
                    <div className={style.top}>
                        <img className={style.ItemImg} src={props.img}/>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.cost}>￥{props.cost}<span>(税込)</span></p>
                        <div className={style.heart} onClick={heratChange}>
                            {heart ?
                                <img src={icon2} />
                                :
                                <img src={icon} />
                            }
                            
                        </div>
                        
                        <button>カートに入れる</button>
                        <div className={style.clear}></div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={670} maxWidth={850}>
                <div className={style.Item}>
                    <div className={style.top3}>
                        <img className={style.ItemImg} src={props.img}/>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.cost}>￥{props.cost}<span>(税込)</span></p>
                        <div className={style.heart} onClick={heratChange}>
                            {heart ?
                                <img src={icon2} />
                                :
                                <img src={icon} />
                            }
                            
                        </div>
                        
                        <button>カートに入れる</button>
                        <div className={style.clear}></div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={670} minWidth={500}>
                <div className={style.SItem}>
                    <div className={style.top}>
                        <img className={style.ItemImg} src={props.img}/>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.cost}>￥{props.cost}<span>(税込)</span></p>
                        <div className={style.heart} onClick={heratChange}>
                            {heart ?
                                <img src={icon2} />
                                :
                                <img src={icon} />
                            }
                            
                        </div>
                        
                        <button>カートに入れる</button>
                        <div className={style.clear}></div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
                <div className={style.SItem2}>
                    <div className={style.Stop2}>
                        <img className={style.SItemImg2} src={props.img}/>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.cost}>￥{props.cost}<span>(税込)</span></p>
                        <div className={style.heart} onClick={heratChange}>
                            {heart ?
                                <img src={icon2} />
                                :
                                <img src={icon} />
                            }
                            
                        </div>
                        
                        <button>カートに入れる</button>
                        <div className={style.clear}></div>
                    </div>
                </div>
            </MediaQuery>
        </>
        
    )
}
export default Item