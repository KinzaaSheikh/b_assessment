'use client'

import Image from 'next/image'


export default function TwoComponents() {
    return(
        <div className="flex p-4 m-4 gap-4">
            <div className="flex-1 rounded-xl p-4 radius-xl bg-[#B0751E]">
            <Image 
                    src='/sattelite.svg'
                    width={150}
                    height={150}
                    alt=''
                    className='flex-grow relative align-top items-end top-0 right-0 '
                />
                <h1 className="font-medium text-xl ">Business Center</h1>
                <p className="font-thin text-sm">Create Business Plans, White Paper and more</p>
            </div>
            <div className="flex-1 rounded-xl p-4 bg-[#74136F]">
            <Image 
                    src='/sattelite_1.svg'
                    width={150}
                    height={150}
                    alt=''
                    className='relative align-top items-end top-0 right-0 '
                />
                <h1 className="font-medium text-xl ">Web 3</h1>
                <p className="font-thin text-sm">Create Smart Contracts and NFTs</p>
            </div>
        </div>
    )
}