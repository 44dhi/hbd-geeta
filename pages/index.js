/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [whichImage,setWhichImage] = useState(false);

  const animations = {
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            duration:.8,
        }
    },
  }

  useEffect(()=>{

    if(window.innerWidth <= 600) {
      setWhichImage('mobile')
    } else if(window.innerWidth <1200 && window.innerHeight >600) {
      setWhichImage('between')
    }
    else {
      setWhichImage('web')
    }

  },[])

  return (
    <div className={styles.container}>
      {
        whichImage == 'mobile' && <div className={styles.phone}>
          <Image
            src={'/mobile.svg'}
            layout="fill"
            objectFit='cover'
          />
        </div>
      }
      {
        whichImage == 'between' && <div className={styles.web}>
          <div className={styles.container2}>
            <Image
              src={'/between.svg'}
              layout="fill"
              objectFit='cover'
            />
          </div>
        </div>
      }
      {
        whichImage == 'web' && <div className={styles.web}>
          <div className={styles.container2}>
            <Image
              src={'/web.svg'}
              layout="fill"
              objectFit='cover'
            />
          </div>
        </div>
      }
      <motion.div initial="hidden" animate="visible" variants={animations} className={styles.textContainer}>
        <span>If your name is Geeta, click this <a target="_blank" href='https://peppered-piccolo-e47.notion.site/Geeta-Birthday-4289770353fd4b19b379feaf96d8f795'>link</a></span>
      </motion.div>
    </div>
  )
}
