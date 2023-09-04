import room1 from './assets/room-1.jpeg'
import room2 from './assets/room-2.jpeg'
import room3 from './assets/room-3.jpg'
import room4 from './assets/room-4.jpg'
import room5 from './assets/room-5.jpg'
import wellness from './assets/wellness-experience.jpg'
import snorkel from './assets/snorkel-safari.jpeg'
import spa from './assets/spa.jpg'

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

export type AmenitiesProps = {
    title: string,
    image: string,
    summary: string
}

export const amenities: AmenitiesProps[] = [
    {
        title: 'IMMERSIVE WELLNESS EXPERIENCES',
        image: wellness,
        summary: 'Revitalize your body and soul in the idyllic surroundings of Bora Bora with our exclusive wellness exercises. Amidst the stunning backdrop of turquoise waters and lush greenery, discover a harmonious balance of mind, body, and spirit.'
    },
    {
        title: 'SNORKEL SAFARI',
        image: snorkel,
        summary: 'Dive into the aquatic wonderland of Bora Bora with our exhilarating snorkeling safaris. Embark on an underwater adventure like no other as you explore vibrant coral gardens and encounter a kaleidoscope of marine life beneath the pristine Pacific waters.'
    },
    {
        title: 'EXCLUSIVE LAGOON SPA',
        image: spa,
        summary: 'Discover true serenity at our one-of-a-kind spa nestled amidst lush groves and the tranquil lagoon of Bora Bora. Our oasis of relaxation offers a harmonious blend of nature and rejuvenating treatments. Picture yourself surrounded by swaying palm trees, the gentle rustling of leaves, and the soothing sounds of water, as you embark on a journey of pure bliss.'
    }
]

