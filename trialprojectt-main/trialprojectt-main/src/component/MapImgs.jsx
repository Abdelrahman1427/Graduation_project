
import mapOne from '../imgs/map_1.png'
import mapTwo from '../imgs/map_2.png'
import { motion } from "framer-motion";
import { animationStart } from "../assets/motionAni/animation.TS";
const MapImgs = () => {
  return (
    <div className='MapImgsWrapper'>
    <motion.img src={mapOne}  initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }} />
    <motion.img src={mapTwo}
         initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }}
    />
    </div>
  )
}

export default MapImgs
