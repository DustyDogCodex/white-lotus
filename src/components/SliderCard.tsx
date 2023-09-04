type SliderProps = {
    title: string,
    image: string
}

function SliderCard({ title, image }: SliderProps) {
    return (
        <div
            className="h-96 w-80 flex flex-col items-center justify-center"
        >
            <img 
                src={image} 
                alt="image showcasing accomodations"
                className="h-4/5 w-full" 
            />
            <p className="text-sm text-center">{title}</p>
        </div>
    )
}

export default SliderCard