'use client'
import Token from '@/components/Token'
import Image from 'next/image'


export default function Sidebar() {
    return <div className="h-screen w-1/4 bg-[#131623]">
        <div className='flex items-center justify-center mt-12 space-x-4'>
            <Image 
                src="/logo.svg"
                width={50}
                height={50}
                alt='logo'
            />
            <h1 className='font-bold '>Birble <span className='bg-gradient-to-b from-pink-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text'>AI</span></h1>
        </div>
        <div className='flex flex-col justify-center items-center h-1/2 p-8 mb-12 '>
            <ul className='mt-8 w-full space-y-8'>
                <li className=''>Dashboard</li>
                <li className='relative'>
                    AI Generator
                    <ul className='mt-2 p-4 space-y-2'>
                            <li className='font-thin'>Conversation</li>
                            <li className='font-thin'>Image Creation</li>
                            <li className='font-thin'>Music Creation</li>
                            <li className='font-thin'>Video Generation</li>
                            <li className='font-thin'>Code Generation</li>
                            <li className='font-thin'>Text to Voice</li>
                    </ul>
                </li>
                <li className=''>Collections</li>
                <li className=''>Token Sale</li>
            </ul>
        </div>
        <div className="h-screen py-8 bg-gradient-to-t from-gray-950 to-[#0f0e2a]">
            <div>
                <Token />
            </div>
            <div className='flex flex-col justify-center items-center h-1/2 p-8'>
                <ul className='mt-8 w-full space-y-8'>
                    <li>Profile & Settings</li>
                    <li>FAQ & Help</li>
                    <li>Logout</li>
                </ul>
            </div>
            <div className='flex flex-1 p-4 justify-center items-center space-x-4 '>
                <Image 
                    src='/designer.png'
                    width={100}
                    height={100}
                    alt='Profile picture'
                />
            <div>
                <h1 className='text-lg font-bold'>Mima Smith</h1>
                <p className='text-sm font-thin'>Designer</p>
            </div>
            </div>
        </div>
    </div>
}