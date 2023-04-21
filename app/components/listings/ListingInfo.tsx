'use client'

import useCountries from '@/app/hooks/useCountries'
import { SafeUser } from '@/app/types'
import { IconType } from 'react-icons'

interface ListingInfoProps {
    user: SafeUser
    descritpion: string
    guestCount: number
    roomCount: number
    bathroomCount: number
    category:
        | {
              icon: IconType
              label: string
              dscription: string
          }
        | undefined
    locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    descritpion,
    guestCount,
    roomCount,
    bathroomCount,
    category,
    locationValue,
}) => {
    const { getByValue } = useCountries()

    const coordinated = getByValue(locationValue)?.latlng

    return (
        <div className='col-span-4 flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <div className='text-xl font-semibold flex items-center gap-2'>
                    <div>Hosted by {user?.name}</div>
                </div>
            </div>
        </div>
    )
}

export default ListingInfo
