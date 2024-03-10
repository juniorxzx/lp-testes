'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

// icons
import styles from "./page.module.scss";
import DesignImg from '@/assets/imgs/design-bg.jpg'
import DesignImg2 from '@/assets/imgs/design-bg2.jpg'
import Seo from '@/assets/imgs/seo.png'
import LandingPage from '@/assets/imgs/landingpage.png'
import DigitalMarketing from '@/assets/imgs/digitalmarketing.png'
import MediaManagement from '@/assets/imgs/mediamanagement.png'
import ContentProduction from '@/assets/imgs/contentproduction.png'
import DataAnalysis from '@/assets/imgs/dataanalysis.png'
import Carousel from '@/components/Carousel/Carousel';

// persons
import woman1 from '@/assets/imgs/woman1.jpg'
import woman2 from '@/assets/imgs/woman2.jpg'
import woman3 from '@/assets/imgs/woman3.jpg'
import man1 from '@/assets/imgs/man1.jpg'
import man2 from '@/assets/imgs/man2.jpg'
import contact from '@/assets/imgs/contact.png'
import { FaArrowRightLong, FaTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import Header from '@/components/Header/Header';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const services = [
    { icon: Seo, name: 'SEO' },
    { icon: LandingPage, name: 'Landing Page' },
    { icon: DigitalMarketing, name: 'Digital Marketing' },
    { icon: MediaManagement, name: 'Social Media Management' },
    { icon: ContentProduction, name: 'Content Production' },
    { icon: DataAnalysis, name: 'Data Analysis' },
  ]

  const comments = [
    {
      img: woman1, name: 'Emily Anderson', company: 'Tech Innovators',
      comment: 'Amazing product features! Will definitely buy again.', stars: 5
    },

    {
      img: man1, name: 'Alex Turner', company: 'Globe Explorers',
      comment: 'Quick delivery and top-notch quality. Impressed!', stars: 4
    },

    {
      img: woman2, name: 'Sophie Williams', company: 'Eco Solutions Ltd.',
      comment: 'The product is eco-friendly and works like a charm. 10/10!', stars: 5
    },

    {
      img: man2, name: 'Chris Roberts', company: 'Digital Creations',
      comment: 'Outstanding service. The team went above and beyond.', stars: 5
    },

    {
      img: woman3, name: 'Olivia Smith', company: 'Innovate Tech',
      comment: 'Excellent communication and prompt support. Highly recommended!', stars: 4
    },

  ];

  if (loading) {
    return (
      <main className={styles.main}>
        <section className={styles.loading}>
          <h2>Disclaimer</h2>
          <p>
            This website is for development practice only and is not a real agency.
          </p>
          <p>
            For any questions or to request content removal, please contact:
            <a href="mailto:al860270@gmail.com">Contact</a>
          </p>
        </section>
      </main>
    )
  }
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.home}>
          <div className={styles.box}>
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}>
              MIDNIGHT Agency
            </motion.h2>

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quibusdam est nostrum placeat assumenda
              saepe beatae totam voluptates quod accusantium, illo tempora blanditiis eveniet quo animi dolorum,
              possimus enim! Quo?
            </motion.span>

            <motion.a
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
              }}
              href='#contact' className={styles.buttonCTA}>
              Let´s Talk
            </motion.a>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className={styles.boxImgs}>
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1
                }
              }}
              className={styles.img1} >
              <Image src={DesignImg} alt='' />
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1
                }
              }}
              className={styles.img1}>
              <Image src={DesignImg2} alt='' />
            </motion.div>


          </motion.div>
        </section>

        <section className={styles.about} id='about'>
          <span className={styles.title}>
            who we are
          </span>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quibusdam est nostrum placeat assumenda
            saepe beatae totam voluptates quod accusantium, illo tempora blanditiis eveniet quo animi dolorum,
            possimus enim!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quibusdam est nostrum placeat assumenda
            saepe beatae totam voluptates quod accusantium, illo tempora blanditiis eveniet quo animi dolorum,
            possimus enim!
          </div>
        </section>

        <section className={styles.services} id='services'>
          <div className={styles.box}>
            <h2>creative storytelling experts</h2>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quibusdam est nostrum placeat assumenda
              saepe beatae totam voluptates quod accusantium, illo tempora blanditiis eveniet quo animi dolorum,
              possimus enim!
            </span>
          </div>

          <div className={styles.box}>
            <div className={styles.boxCards}>
              {services.map((item, index) => (
                <div className={styles.card} key={`service-${index}`}>
                  <Image src={item.icon} alt='' />

                  <h1>{item.name}</h1>
                </div>
              ))}
            </div>
          </div>


        </section>

        <section className={styles.blog} id='services'>
          <div className={styles.box}>
            <h2>our clients say about us</h2>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quibusdam est nostrum placeat assumenda
              saepe beatae totam voluptates quod accusantium, illo tempora blanditiis eveniet quo animi dolorum,
              possimus enim!
            </span>
          </div>
          <div className={styles.mdBoxComments}>
            <Carousel cards={comments} />
          </div>
          <div className={styles.boxComments}>
            {comments.map((item, index) => (
              <div className={`${styles.card} ${styles[`card${index}`]}`} key={`comments-${index}`}>
                <div className={styles.cHead}>
                  <Image src={item.img} alt={`profile - ${item.name}`} />
                  <div>
                    <h1>{item.name}</h1>
                    <span>{item.company}</span>
                  </div>
                </div>
                <div className={styles.cBody}>
                  <div className={styles.content}>
                    <span>
                      {item.comment}
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </section>
        <section className={styles.contact} id='contact'>
          <div className={`${styles.box} ${styles.boxContact}`}>
            <h2>contact</h2>
            <span>Empowering Impact Together: We're here to connect you with the resources and support
              you need to make a difference.</span>
            <Image src={contact} width={300} height={300} alt='' />
          </div>
          <div className={`${styles.box} ${styles.boxForm}`}>
            <form >
              <div className={styles.groupField}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                {/* <MdOutlinePermIdentity size={20}/> */}
              </div>
              <div className={styles.groupField}>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" />
                {/* <MdOutlineMail size={20}/> */}

              </div>
              <div className={styles.groupField}>
                <label htmlFor="text">Your Message</label>
                <textarea name="text" id="text" ></textarea>
              </div>

              <div className={styles.button}>
                <button>
                  <span>Submit</span>
                  <FaArrowRightLong />
                </button>
              </div>
            </form>

            <div className={styles.socials}>
              <Link href=""><FaInstagram size={26} /></Link>
              <Link href=""><FaFacebook size={26} /></Link>
              <Link href=""><FaLinkedin size={26} /></Link>
              <Link href=""><FaTwitter size={26} /></Link>
            </div>
          </div>
        </section>

      </main>
    </>

  );
}
