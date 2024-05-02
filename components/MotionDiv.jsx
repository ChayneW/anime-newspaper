'use client'
// *** importing motion div then saving the component


import {motion} from 'framer-motion'

export const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
}

export const MotionDiv = motion.div