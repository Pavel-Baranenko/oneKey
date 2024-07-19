"use client"

import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// import "swiper/swiper.min.css";
import styles from "./index.module.scss"
import ReadMore from '@/components/ui-kit/ReadMore';



export default function RieltorsSlides() {


  return (
    <section>
      <div className="container">
        <h6 className='section-title'>
          Hundreds of brokers, agencies and clients from different countries and cities found each other
        </h6>

        <Swiper
          navigation={true}
          modules={[Navigation, Parallax, EffectFade]}
          className={styles.swiper}
          spaceBetween={20}
          mousewheel={true}
          slidesPerView={3}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.slide__cart}>
              <div className={styles.head}>

                <img src="./img/static/yes.png" alt="" className={styles.img} />

                <div className={styles.wrap}>
                  <div className={styles.top}>
                    <div className={styles.name}>Johnatan Smith</div>
                    <div className={styles.verify}></div>
                  </div>
                  <div className={styles.role}>Broker</div>

                  <div className={styles.stars}>
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                  </div>
                </div>
              </div>



              <span className={styles.title}>
                The 1Key platform solved my pain with targeted customers!
              </span>
              <div className="text-open__bottom">
                <ReadMore>
                  I was having trouble finding quality clients. I used to try to find potential buyers of real estate on my own.<br />
                  Posted ads on message boards and other resources. Making calls to a cold database of clients. Such work took a lot of time and effort without any significant result.<br /> Now I get the main flow of clients from 1Key, and that is why I am writing this review with gratitude.
                </ReadMore>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slide__cart}>
              <div className={styles.head}>

                <img src="./img/static/avatar-2.png" alt="" className={styles.img} />

                <div className={styles.wrap}>
                  <div className={styles.top}>
                    <div className={styles.name}>Yakovleva Angelina</div>
                    <div className={styles.verify}></div>
                  </div>
                  <div className={styles.role}>Broker</div>

                  <div className={styles.stars}>
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                  </div>
                </div>
              </div>



              <span className={styles.title}>
                Four deals in the first month
              </span>
              <div className="text-open__bottom">
                <p>
                  Hi everyone, my name is Angelina. I work at the 21 Centry agency. I found out about the portal and decided to try it. And what can I say - here really thought about the quality of applications! We bought both exclusive applications and access to the general feed. Already had 4 deals and 11 more shows. we will continue. Thank you!
                </p>


              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slide__cart}>
              <div className={styles.head}>

                <img src="./img/static/avatar-3.png" alt="" className={styles.img} />

                <div className={styles.wrap}>
                  <div className={styles.top}>
                    <div className={styles.name}>Petr Barinov</div>
                    <div className={styles.verify}></div>
                  </div>
                  <div className={styles.role}>Broker</div>

                  <div className={styles.stars}>
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                  </div>
                </div>
              </div>



              <span className={styles.title}>
                These are the highest quality leads I have worked with so far
              </span>
              <div className="text-open__bottom">
                <ReadMore>
                  With the advent of this platform, earning money has become easier. One of the main advantages is that I could enter the parameters of the properties I am dealing with and then receive notifications of new applications that meet my requirements. Now that's a real time and energy saver! Plus, I can interact with potential clients via the built-in chat feature to clarify their needs and offer them options.
                </ReadMore>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slide__cart}>
              <div className={styles.head}>

                <img src="./img/static/avatar-4.png" alt="" className={styles.img} />

                <div className={styles.wrap}>
                  <div className={styles.top}>
                    <div className={styles.name}>Andrew Alekseev</div>
                    <div className={styles.verify}></div>
                  </div>
                  <div className={styles.role}>Broker</div>

                  <div className={styles.stars}>
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                    <img src="./img/icons/Star.svg" alt="" />
                  </div>
                </div>
              </div>



              <span className={styles.title}>
                Accessed useful information
              </span>
              <div className="text-open__bottom">
                <p>
                  Thanks to this service, I have access to useful information that I can use to easily determine the prices of properties, find out the supply and demand in a particular neighborhood, and assess the potential for investment. All of this helps me to make more informed decisions and improve my work as a realtor.
                </p>


              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section >
  )
}
