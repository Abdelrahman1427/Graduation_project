
import { motion } from "framer-motion"
import { animationStart } from "../assets/motionAni/animation.TS";
import { useTranslation } from 'react-i18next';

const TextHome = () => {
  const { t } = useTranslation();
  return (
        <motion.div
        layout
        initial={{height :0}}
        animate={{height : "unset"}}
        transition={{delay : animationStart , duration : 1}}
        >
            <div className="TextMain  d-flex" id="TextMain">
            <div className="textWrapper ">
            <div className="titleMain  d-flex">
            {t('Alexandria_Port_Athourity')}
            </div>
            <p className="desMain " > {t('portDescription')}</p>
            </div>
            </div>
            </motion.div>
  )
}

export default TextHome
