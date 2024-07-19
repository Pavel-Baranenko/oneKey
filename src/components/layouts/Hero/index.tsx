import React from 'react'
import Image from "next/image";

import styles from './index.module.scss'


export default function Hero() {


  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="wrap-linear-section">
          <div className={styles.wrap}>
            <div className={styles.info}>
              <h1 className={styles.title}>
                Platform where clients meet  brokers
              </h1>
              <p className={styles.subtitle}>
                Register and start working with targeted applications right now!
              </p>
              <button className='blue-btn'>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65814 3.09484L3.56924 8.92532H6.6374C7.02644 8.92532 7.34182 9.2407 7.34182 9.62974V12.9051L11.4307 7.0746H8.36257C7.97352 7.0746 7.65814 6.75922 7.65814 6.37018V3.09484ZM7.48924 1.39858C7.88451 0.834954 8.77039 1.11464 8.77039 1.80304V5.96236H12.2148C12.785 5.96236 13.119 6.60443 12.7916 7.07124L7.51073 14.6013C7.11546 15.165 6.22957 14.8853 6.22957 14.1969V10.0376H2.78512C2.21494 10.0376 1.88101 9.3955 2.20838 8.92868L7.48924 1.39858Z" fill="white" />
                </svg>
                <span>Try for free</span>
              </button>
            </div>
            <div className={styles.video}>
              <Image
                src="/img/static/house-preview.webp"
                width={634}
                height={402}
                alt="" />
              <button className={styles.play}>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.76" clip-path="url(#clip0_32_7689)">
                    <path d="M64.2019 37.5589C67.1798 20.1374 55.471 3.60043 38.0495 0.622519C20.6281 -2.35539 4.09108 9.35344 1.11317 26.7749C-1.86474 44.1964 9.84409 60.7334 27.2656 63.7113C44.6871 66.6892 61.224 54.9804 64.2019 37.5589Z" fill="#EEEEEE" />
                    <path d="M25.867 19.7738H26.7983C27.3934 19.9137 27.9616 20.1489 28.4806 20.47C29.0555 20.8067 29.6303 21.132 30.2205 21.463L44.831 29.7739C45.3603 30.0491 45.8277 30.4284 46.2048 30.8886C46.5129 31.2624 46.6812 31.7305 46.6812 32.2135C46.6812 32.6964 46.5129 33.1645 46.2048 33.5384C45.8277 33.9986 45.3603 34.3778 44.831 34.6531L28.3331 44.0444C27.935 44.2838 27.5056 44.4675 27.057 44.5904C25.6888 44.9328 24.566 44.2879 24.1981 42.9373C24.0849 42.4974 24.0314 42.0445 24.039 41.5905C24.039 35.336 24.039 29.0821 24.039 22.8288C24.039 22.6823 24.039 22.5358 24.039 22.3913C24.1521 21.1815 24.5507 20.1638 25.867 19.7738Z" fill="#545454" />
                  </g>
                  <defs>
                    <clipPath id="clip0_32_7689">
                      <rect width="64.0038" height="64.0038" fill="white" transform="translate(0.640625 0.150024)" />
                    </clipPath>
                  </defs>
                </svg>

              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
