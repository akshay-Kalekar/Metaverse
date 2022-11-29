'use client';

import { motion } from 'framer-motion'
import{newFeatures} from "../constants"
import { staggerContainer,fadeIn,planetVariants } from "../utils/motion";
import  {TitleText,TypingText }from'../components';
import {startingFeatures} from '../constants'
import styles from "../styles";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once:'false',amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col `}
  ></motion.div>
  <TypingText title="People in the World" 
  textStyles="text-center"/>
  <TitleText title={<div> Track friends around you and invite them to play together in the same world</div>}
  textStyles="text-center"
  />
<div className='flex justify-center'>
  <motion.div
  variant={fadeIn('up','tween',0.3,1)}
  className="relative mt-[68px] flex w-1/2 h-1/2 "
  >
  <img 
  src="/map.png"
  alt="map"
  className='w-full h-full object-contain'
  />
  <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
  <img
  src="people-01.png"
  alt="people"
  className='w-full h-full'/>
  </div>
  <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
  <img
  src="people-02.png"
  alt="people"
  className='w-full h-full'/>
  </div>
  <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
  <img
  src="people-03.png"
  alt="people"
  className='w-full h-full'/>
  </div>
  </motion.div>
  </div>
  
  
  
  </section>
  );
  
export default World;
