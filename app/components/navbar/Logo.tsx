'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()

    return (
        <Image 
        className='hiden m:block cursor-pointer' 
        alt="Logo"
        src="/images/logo.png" 
        width='100' 
        height='100' />
    )
}

export default Logo;