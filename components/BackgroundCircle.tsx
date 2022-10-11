import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircle({ }: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [.1, .2, .4, .8, .1, .1], scale: [1, 2, 2, 3, 1], borderRadius: ['20 %', '20 %', '50 %', '80 %', '20%'] }} transition={{ duration: 2.5 }} className='flex justify-center items-center relative'>
            <div className='border border-red-500 rounded-full h-[200px] w-[200px] animate-ping mt-52 absolute' />
            <div className='border border-red-500 rounded-full h-[300px] w-[300px]  mt-52 absolute' />
            <div className='border border-red-500 rounded-full h-[500px] w-[500px]  mt-52 absolute' />
            <div className='border border-red-500 rounded-full opacity-20 h-[650px] w-[650px]  mt-52 absolute animate-pulse' />
            <div className='border border-red-500 rounded-full opacity-20 h-[800px] w-[800px]  mt-52 absolute ' />
        </motion.div>
    )
}