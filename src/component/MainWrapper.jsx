import style from "./css/Main.module.css";
import Item from "./Item";
import image1 from "./images/4525538_s.jpg"
import image2 from "./images/4546625_m.jpg"
import image3 from "./images/4642520_m.jpg"
import image4 from "./images/4525539_s.jpg"
import image5 from "./images/952170_m.jpg"
import image6 from "./images/4713298_m.jpg"
import image7 from "./images/22170849_m.jpg"
import image8 from "./images/4874127_m.jpg"
import image9 from "./images/3905211_m.jpg"
import MediaQuery from "react-responsive";
function MainWrapper(){
    return(
        <>
            <MediaQuery minWidth={1000}>
                <div className={style.MainWrapper}>
                    <div className={style.left}>
                        <div className={style.leftTop}>
                            <p>初めての方へ</p>
                            <p>Libeol&Shoppingについて</p>
                        </div>
                        <div className={style.category}>
                            <h5 className={style.catesel}>カテゴリーから選ぶ</h5>
                            <p>本・コミック</p>
                            <p>家電・カメラ・AV機器</p>
                            <p>パソコン・周辺機器</p>
                            <p>テレビゲーム</p>
                            <p>ホームキッチン</p>
                            <p>食品・飲料</p>
                            <p>スポーツ・アウトドア</p>
                            <p>ファッション</p>
                            <p>車・バイク</p>
                            <p>おもちゃ</p>
                            <p>DVD・ブルーレイ</p>
                            <p>ドラッグストア</p>
                        </div>
                    </div>
                    <div className={style.center}>
                        <div className={style.reco}>
                            <h2>おすすめ商品</h2>
                        </div>
                        <div className={style.items}>
                            <Item img={image1} name="メンズ　シャツ（黒）" cost="3,000"/>
                            <Item img={image2} name="メンズ　半袖tシャツ" cost="2,000"/>
                            <Item img={image3} name="メンズ　ショルダーバッグ" cost="6,000"/>
                            <Item img={image4} name="メンズ　シャツ(チェック)" cost="3,500"/>
                            <Item img={image5} name="Libeol限定 二つ折り財布" cost="1,000"/>
                            <Item img={image6} name="レディース　バッグ" cost="5,000"/>
                            <Item img={image7} name="レディース　セットアップ(チェック柄)" cost="12,000"/>
                            <Item img={image8} name="レディース　麦わら帽子" cost="1,500"/>
                            <Item img={image9} name="レディース　バッグ" cost="7,500"/>
                        </div>
                        
                        
                    </div>
                    <div className={style.right}>
                        <h3>お買い物カート</h3>

                        <p>カートの中に商品はございません</p>
                    </div>
                    <div className={style.clear}></div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={670} maxWidth={1000}>
            <div className={style.Tcenter}>
                    <div className={style.Treco}>
                            <h2>おすすめ商品</h2>
                        </div>
                        <div className={style.Titems}>
                            <Item img={image1} name="メンズ　シャツ（黒）" cost="3,000"/>
                            <Item img={image2} name="メンズ　半袖tシャツ" cost="2,000"/>
                            <Item img={image3} name="メンズ　ショルダーバッグ" cost="6,000"/>
                            <Item img={image4} name="メンズ　シャツ(チェック)" cost="3,500"/>
                            <Item img={image5} name="Libeol限定 二つ折り財布" cost="1,000"/>
                            <Item img={image6} name="レディース　バッグ" cost="5,000"/>
                            <Item img={image7} name="レディース　セットアップ(チェック柄)" cost="12,000"/>
                            <Item img={image8} name="レディース　麦わら帽子" cost="1,500"/>
                            <Item img={image9} name="レディース　バッグ" cost="7,500"/>
                            <div className={style.clear}></div>
                        </div>
                        
                        
                    </div>
            </MediaQuery>
            <MediaQuery maxWidth={670}>
            <div className={style.Scenter}>
                    <div className={style.Sreco}>
                            <h2>おすすめ商品</h2>
                        </div>
                        <div className={style.Sitems}>
                            <Item img={image1} name="メンズ　シャツ（黒）" cost="3,000"/>
                            <Item img={image2} name="メンズ　半袖tシャツ" cost="2,000"/>
                            <Item img={image3} name="メンズ　ショルダーバッグ" cost="6,000"/>
                            <Item img={image4} name="メンズ　シャツ(チェック)" cost="3,500"/>
                            <Item img={image5} name="Libeol限定 二つ折り財布" cost="1,000"/>
                            <Item img={image6} name="レディース　バッグ" cost="5,000"/>
                            <Item img={image7} name="レディース　セットアップ(チェック柄)" cost="12,000"/>
                            <Item img={image8} name="レディース　麦わら帽子" cost="1,500"/>
                            <Item img={image9} name="レディース　バッグ" cost="7,500"/>
                            <div className={style.clear}></div>
                        </div>
                        <div className={style.clear}></div>
                    </div>
            </MediaQuery>
        </>
        
    )
}
export default MainWrapper