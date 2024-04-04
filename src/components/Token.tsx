'use client'

import Image from 'next/image'

export default function Token() {
    return(
        <div className="relative p-4 m-8 rounded-lg" style={{
            backgroundImage: `url('/Token_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Image 
                className='absolute -top-8 -left-8'
                src="/Astronaut.svg"
                width={150}
                height={150}
                alt="Astronaut"
            />
            <div className="flex h-full w-full bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
            <Image 
                src="/Bolt.svg"
                width={50}
                height={50}
                alt=""
            />
                <div>
                    <h1>Upgrade</h1>
                    <div className='flex'>
                        <Image 
                        src="/Coin.svg"
                        width={50}
                        height={50}
                        alt=""
                    />
                    <p>300</p>
                    </div>
                </div>
            </div>
        </div>
    )
}