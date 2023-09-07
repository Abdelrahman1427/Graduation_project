import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import {motion} from "framer-motion"

const DropDownbyIMO = ({children , onClick}) => {
  return (

      <motion.div
      className="menuToChooseContainer d-flex"
      onClick={onClick}
      initial={{opacity : 0 }}
      animate={{opacity : 1}}
      exit ={{opacity :0}}>
      {children}
    </motion.div>

  )
}

export default DropDownbyIMO
