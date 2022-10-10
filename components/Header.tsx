import React from 'react'
import { SocialIcon } from 'react-social-icons';


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
            <div>
                <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' />

            </div>
            <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
                <p className='uppercase text-gray-400 text-sm hidden md:inline-flex'>Get in touch</p>

            </div>
        </header>
    )
}