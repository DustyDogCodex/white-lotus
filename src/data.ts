import room1 from '/images/room-1.jpeg'
import room2 from '/images/room-2.jpeg'
import room3 from '/images/room-3.jpg'
import room4 from '/images/room-4.jpg'
import room5 from '/images/room-5.jpg'
import Slider1 from '/images/Slider1.jpg'
import Slider2 from '/images/Slider2.jpg'
import Slider3 from '/images/Slider3.jpg'
import Slider4 from '/images/Slider4.jpg'
import Slider5 from '/images/Slider5.jpg'

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

