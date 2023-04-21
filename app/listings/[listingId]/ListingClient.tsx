import { SafeListing, SafeUser } from '@/app/types'
import { Reservation } from '@prisma/client'

interface ListingClientProps {
    reservations?: Reservation[]
    listing: SafeListing & {
        user: SafeUser
    }
    currenUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currenUser,
}) => {
    return <div>ListingClient</div>
}

export default ListingClient
