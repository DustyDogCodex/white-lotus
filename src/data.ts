import room1 from './assets/room-1.jpeg'
import room2 from './assets/room-2.jpeg'
import room3 from './assets/room-3.jpg'
import room4 from './assets/room-4.jpg'
import room5 from './assets/room-5.jpg'

//array with objects containing info about accomodations
export type AccomodationsProps = {
    title: string,
    image: string
}

export const accomodations: AccomodationsProps[] = [
    {
        title: 'ONE BEDROOM WITH PRIVATE POOL AND OCEAN VIEW',
        image: room1
    },
    {
        title: 'TWO BEDROOM PREMIER BEACHFRONT VILLA WITH PRIVATE POOL',
        image: room2
    },
    {
        title: 'THREE BEDROOM BEACHFRONT VILLA WITH PRIVATE LAGOON',
        image: room3
    },
    {
        title: 'ONE BEDROOM OVERWATER OTEMANU BUNGALOW',
        image: room5
    },
    {
        title: 'TWO BEDROOM OVERWATER BUNGALOW WITH PRIVATE INFINITY POOL',
        image: room4
    }
]

