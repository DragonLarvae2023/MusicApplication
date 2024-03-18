import React,{useState} from 'react';
import {motion} from 'framer-motion';
const variantBar1 = {
  inital: {
    rotate:0,
    x:0,
    y:0
  },
  final: {
    rotate: -45,
    x: -4,
    y: 9,
    transition:{
      duration: .3,
      type:"tween"
    }
  },
};
const variantBar2 = {

    initial: {
      rotate: 0,
      x: 0,
      y: 0,
    },
  
  finale:{
      rotate: 45,
      x: -5,
      y: -1,
    },
  
};
const lowerVariant={
  hidden:{
    opacity:1
  },

  visible:{
    opacity:0,
  }
}

const Menu = ({active}) => {
const isActive=active
  return (
    <div className='h-full w-full  top-64' >
     <motion.span className='block bg-white mb-2 w-full/6 rounded-sm h-1/6' variants={isActive&&variantBar1} initial="inital" animate="final"></motion.span>
     <motion.span className='block bg-white mb-2 w-full/6 rounded-sm h-1/6' variants={isActive&&variantBar2} animate="finale" initial="initial"></motion.span>
     <motion.span className='block bg-white mb-2 w-full/6 rounded-sm h-1/6' animate="visible" initial="hidden" variants={isActive&&lowerVariant} ></motion.span>
    
    </div>
  );
}

export default Menu;
