type SliderProps = {
    title: string,
    image: string
}

function SliderCard({ title, image }: SliderProps) {
    return (
        <div>
            <img 
                src={image} 
                alt="" 
            />
            <p>{title}</p>
        </div>
    )
}

export default SliderCard