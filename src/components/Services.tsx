'use client'

import Image from 'next/image'


export default function Services() {
    return(
        <div className='flex p-8 gap-4 '>
            <div className="h-18 w-1/8 p-4 bg-gradient-to-b from-[#4646AF]  to-[#4646D6] border rounded-2xl">
                <Image 
                    src='/productivity.png'
                    width={300}
                    height={300}
                    alt=''
                />
                <h1>Staking Dashboard</h1>
            </div>
            <div className="h-18 w-1/8 p-4 bg-gradient-to-b from-[#4646AF]  to-[#4646D6] border rounded-lg">
                <Image 
                    src='/Winning team.png'
                    width={300}
                    height={300}
                    alt=''
                />
                <h1>Chainlink Raffle</h1>
            </div>
            <div className="h-18 w-1/8 p-4 bg-gradient-to-b from-[#4646AF]  to-[#4646D6] border rounded-lg">
                <Image 
                    src='/Payments.png'
                    width={300}
                    height={300}
                    alt=''
                />
                <h1>Payment Center</h1>
            </div>
            <div className="h-18 w-1/8 p-4 bg-gradient-to-b from-[#4646AF]  to-[#4646D6] border rounded-lg">
                <Image 
                    src='/Projects Gallery.png'
                    width={300}
                    height={300}
                    alt=''
                />
                <h1>Media Created</h1>
            </div>
            <div className="h-18 w-1/8 p-4 bg-gradient-to-b from-[#4646AF]  to-[#4646D6] border rounded-lg">
                <Image 
                    src='/Creative materials.png'
                    width={300}
                    height={300}
                    alt=''
                />
                <h1>Creativity Center</h1>
            </div>
            <div className="h-18 w-1/8 p-4 bg-gradient-to-b from-[#4646AF]  to-[#4646D6] border rounded-lg">
                <Image 
                    src='/Notification.png'
                    width={300}
                    height={300}
                    alt=''
                />
                <h1>Campaign Center</h1>
            </div>
        </div>
    )
}