import Luxury1 from "../assets/Luxury1.jpg"
import Luxury2 from "../assets/Luxury2.jpg"
import Luxury3 from "../assets/Luxury3.jpg"

function Luxury() {
    return (
        <div className="w-full grid h-screen bg-sky-200 px-4">
            <div className="h-[600px]">
                {/* intro */}
                <div className="relative lg:top-20 col-span-1 lg:col-span-2 py-12 w-full lg:w-4/5">
                    <h3 className="text-2xl font-bold">Luxury Beyond Measure</h3>
                    <p className="pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores architecto facere distinctio vero, laboriosam tempore animi odit molestias, harum placeat perferendis libero cumque? Harum voluptatum perferendis ea ex aliquid corporis?</p>
                </div>

                {/* images */}
                <div className="grid grid-cols-2 col-span-2 gap-3">
                    <img src={Luxury1} alt="Luxurious amenities" />
                    <img src={Luxury2} alt="Luxurious amenities" />
                    <img src={Luxury3} alt="Luxurious amenities" />
                </div>
            </div>
        </div>
    )
}

export default Luxury