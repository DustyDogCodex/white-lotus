import Luxury1 from "../assets/Luxury1.jpg"
import Luxury2 from "../assets/Luxury2.jpg"
import Luxury3 from "../assets/Luxury3.jpg"

function Luxury() {
    return (
        <div className="w-full flex justify-center h-screen px-4 pt-16 md:mb-[30%]">
            <div className="h-[600px] grid lg:grid-cols-3 gap-5 w-full lg:w-4/5 bg-sky-200 p-8">
                {/* intro */}
                <div className="relative lg:top-20 col-span-2 lg:col-span-1 py-12">
                    <h3 className="text-4xl font-bold">Luxury Beyond Measure</h3>
                    <p className="pt-5 text-base md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores architecto facere distinctio vero, laboriosam tempore animi odit molestias, harum placeat perferendis libero cumque? Harum voluptatum perferendis ea ex aliquid corporis?</p>
                </div>

                {/* images */}
                <div className="grid grid-cols-2 col-span-2 gap-3">
                    <img className="object-cover w-full h-full" src={Luxury1} alt="Luxurious amenities" />
                    <img className="row-span-2 object-cover w-full h-full" src={Luxury2} alt="Luxurious amenities" />
                    <img className="object-cover w-full h-full" src={Luxury3} alt="Luxurious amenities" />
                </div>
            </div>
        </div>
    )
}

export default Luxury