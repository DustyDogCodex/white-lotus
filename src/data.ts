import room1 from './assets/room-1.jpeg'
import room2 from './assets/room-2.jpeg'
import room3 from './assets/room-3.jpg'
import room4 from './assets/room-4.jpg'
import room5 from './assets/room-5.jpg'
import Slider1 from './assets/Slider1.jpg'
import Slider2 from './assets/Slider2.jpg'
import Slider3 from './assets/Slider3.jpg'
import Slider4 from './assets/Slider4.jpg'
import Slider5 from './assets/Slider5.jpg'

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

export const mediaImages: string[] = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5
]

