'use client'
import Image from 'next/image'

const imageStyle = {
  backgroundColor: '#334155',
  padding: '5px',
  borderRadius: '6px',
  width: 'fit-content',
  height: 'fit-content',
  marginRight: '10px',
}

export default function NavBar() {
    return(
        <div className='flex justify-end h-[3.75rem] px-4 items-center'>
            <Image 
              src="/globe.svg"
              width={10}
              height={10}
              alt='logo'
              style={imageStyle}
            />
            <Image 
              src="/moon.svg"
              width={10}
              height={10}
              alt='logo'
              style={imageStyle}
            />
            <Image 
              src="/bell.svg"
              width={30}
              height={30}
              alt='logo'
            />
        </div>
    )
}