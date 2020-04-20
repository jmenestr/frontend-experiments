import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Add from '@material-ui/icons/Add';
import './index.scss';

export default () => {
  const buttonVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }
  const variants = {
    collapsed: {
      width: '0',
      opacity: 0,
      zIndex: -100,
      maxWidth: 0,
      minWidth: 0,
      transformOrigin: 'center left',
      transition: {
        duration: 10,
        delay: 0.1
      }
    },
    open: {
      width: 'auto',
      minWidth: 150,
      maxWidth: 150,
      opacity: 1,
      zIndex: 1,
      transition: {
        duration: 10,
        delay: 0.1
      }
    }
  }
  const buttonAnimation = useAnimation()
  const inputAnimation = useAnimation()

  const startAnimation = async () => {
  buttonAnimation.start('hidden');
   return inputAnimation.start('open');
  }
  return (
    <div className='animation-wrapper' >
    <motion.button onClick={startAnimation}  animate={buttonAnimation} className='button-reset button' initial='visible' variants={buttonVariants}
>
      <Add />
    </motion.button>
    <motion.div>
      <motion.input
        initial='collapsed'
        animate={inputAnimation}
        variants={variants}
        placeholder='Enter Tag'
        className='input'
        // transition={{ duration: .5 }}
      />
      <motion.div />
    </motion.div>
   

    </div>
  )
}