import { Button } from "@/components/ui/button"
import Image from "next/image"
import BorderBottom from "./borderBottom"

const CategoriesAd = () => {
  return (
    <div>
        <section className="flex justify-center mt-24 mb-28">
            <section className="h-[500px] flex items-center bg-black w-[81vw]">
                <section className="w-1/2 flex justify-center items-center h-full bg-blu">
                    <section className="w-[85%] grid gap-14 bg-purple-20">
                    <span className="text-[#00FF66] text-base">Categories</span>
                    <h1 className="font-semibold text-5xl text-white">Enhance Your Music Experience</h1>
                    <div>
                        <Image className="w-80 h-[62px]" src={"/timer.png"} alt="timer" width={300} height={300}></Image>
                    </div>
                    <Button className="bg-[#00FF66] w-[171px] text-[#FAFAFA] rounded">View All Products</Button>
                    </section>
                </section>
            <section className="w-1/2 mr-5">
                    <Image className="w-[568px] h-[330px]" src={"/music.png"} alt="music" width={400} height={400}></Image>
                </section>
                
            </section>
        </section>
        <BorderBottom/>
    </div>
  )
}

export default CategoriesAd