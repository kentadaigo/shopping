import React from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";
import image1 from "./images/top.jpg";
import image2 from "./images/top1.jpg";
import image3 from "./images/top2.jpg"
import style from "./css/Top.module.css"
class TopSwiper extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        params: {
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          spaceBetween: 30,
          autoplay:{
              delay:6000,
              disableOnInteraction:false
          },
          effect:"overflow"
        }
      }
    }
  
    render() {
      return(
        <Swiper {...this.state.params}>
          <div className={style.img}><img src={image1}/></div>
          <div className={style.img}><img src={image2}/></div>
          <div className={style.img}><img src={image3}/></div>
        </Swiper>
      )
    };
  }
export default TopSwiper