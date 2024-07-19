"use client"

import React from 'react';
import styles from "./index.module.scss"
import Accordion from '@/components/ui-kit/Accordion'
import { useMediaQuery } from '@/hooks/useMediaQuery'


const QuestAnswers = () => {
  const mediaIs1080 = useMediaQuery(1080);


  return (
    <section className={styles.questanswer}>
      <div className="container">
        {
          !mediaIs1080 &&
          <>
            <h4 className="section-title">Questions and answers</h4>
          </>
        }


        <div className={styles.box}>
          <div className={styles.acc}>
            <Accordion
              title="What assurance is there that the applications are targeted?"
            >
              <span>
                First of all, it is important to note that on the platform you can leave an application only after confirming your phone number. For this reason, in 90% of cases, only real people who have confirmed the seriousness of their intentions reach the publication.
                In addition, you can always choose to work only with those applications that have been further qualified by our call center.
              </span>
            </Accordion>
            <Accordion
              title="How to respond to a request?"
            >
              <span>
                Any information sent to the customer chat is a response. Anyone can respond to the request. To do this, all you need to do is:<br />
                1. Register and answer simple questions about the property you are offering.<br />
                2. Go to the application feed and use the filter to find a suitable one.<br />
                3. Open the application and send your offer in the chat room in the form of text or uploaded property.
              </span>
            </Accordion>
            <Accordion
              title="How much does it cost to use the service?"
            >
              <span>
                The first 14 days for new users is a test period, during which all answers will be free!<br />
                At the end of the test period, you can subscribe for a monthly subscription for a fixed amount and answer queries without restrictions.<br />
                Or you can pay only for the received customer contacts. In this case, the cost of a contact is formed individually and is pre-displayed in the request card.
              </span>
            </Accordion>

            <Accordion
              title="How to contact the client?"
            >
              <span>The client can always write to the chat room, ask questions and offer a selection of real estate properties there. <br />
                If the client is interested in the offer, he will initiate an exchange of contacts for further communication.</span>
            </Accordion>
            <Accordion
              title="How to publish a request?"
            >
              <span>
                Any registered user can post an application for real estate search on Umnoj platform.<br />
                Just click on the button  <a href='./'>«Create a request»</a> and answer a few simple questions about the property you are looking for. It will only take a couple of minutes.
                After that the application is posted anonymously. It is up to you to decide to whom and when to disclose your contact details.
              </span>
            </Accordion>
            <Accordion
              title="How to upload a property?"
            >
              <span>
                Any registered user can upload a real estate object to the 1Key platform.<br />
                To do so, just click on the button <a href='./'>«Upload object»</a> and answer a few questions about the real estate object you want to add. After that, the page of the object will be published in the<a href='./'>“My Objects” </a>  section.
                Important!<br />
                1Key is not a classic real estate portal, where owners place their properties in an open catalog. In this case, you decide to whom and when to offer your property.
              </span>
            </Accordion>
          </div>
          <div className={styles.right}>
            <div className={styles.right__inner}>
              {mediaIs1080 &&
                <>
                  <h4 className="section-title">Questions and answers</h4>
                </>}

              <p>If you haven’t found the answer to your question, then write to support <a href="./">support </a></p>
            </div>

            <img src="img/static/feedback.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default QuestAnswers;