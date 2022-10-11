import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../components/BackgroundCircle'
import ruhul from '../assets/image1.jpg'
import Image from 'next/image'


type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({ words: ['MERN Developer', 'UI/UX Designer'], loop: true, delaySpeed: 2000 })
    return (
        <div className='flex flex-col justify-center items-center text-center overflow-hidden space-y-8 h-screen '>
            <img className='h-32 w-32  rounded-full object-cover relative mx-auto' src="https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg" alt="" />
            <div>
                <h2 className='text-sm uppercase tracking-[10px] pb-3 text-gray-500'>Web Developer</h2>
                <h1 className='text-4xl lg:5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7ab0a' />
                </h1>
            </div>
            <div>
                <button className='heroButton'>About</button>
                <button className='heroButton'>Experience</button>
                <button className='heroButton'>Skills</button>
                <button className='heroButton'>Project</button>
            </div>
        </div>
    )
}