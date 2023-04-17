'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()

    return (
        <Image 
        onClick={() => router.push('/')}
        className='hidden md:block cursor-pointer' 
        alt="Logo"
        src="/images/logo.png" 
        width={200} 
        height={100}
        />
    )
}

export default Logo;