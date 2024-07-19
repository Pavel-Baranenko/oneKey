import React from 'react'
import Image from "next/image";

import styles from './index.module.scss'


export default function HowItWorks() {


  return (
    <section className={styles.howitworks}>
      <div className="container">
        <h4 className="section-title">How it works?</h4>
        <div className={styles.grid}>
          <div className={styles.item}>
            <img src="./img/static/how-it-works-1.svg" alt="" />
            <div className={styles.item__inner}>
              <span>
                <b>Registration </b>
                and Profile Setup
              </span>
              <p>
                Sign up with personal or professional details. Clients set up profiles highlighting property preferences and Brokers showcasing experience, areas of expertise, and listings.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img src="./img/static/how-it-works-2.svg" alt="" />
            <div className={styles.item__inner}>
              <span>
                <b>Matching </b>
                and Initial Contact</span>
              <p>
                Clients can browse listings or receive matches based on the preferences, send inquiries or request more information. Brokers review client profiles and initiate contact to discuss needs and preferences.
              </p>
            </div>


          </div>
          <div className={styles.item}>
            <img src="./img/static/how-it-works-3.svg" alt="" />
            <div className={styles.item__inner}>
              <span>
                <b>Property choosing </b>
                and Consultation
              </span>
              <p>
                Clients can schedule virtual or in-person property viewings through the platform and get detailed information. Everyone engage in discussion property details and suitability.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
