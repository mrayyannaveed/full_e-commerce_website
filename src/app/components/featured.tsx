import SectionName from "./sectionName"
import Image from "next/image"
import Link from "next/link"
import BorderBottom from "./borderBottom"

const Featured = () => {
    const sectName = "Featured"
    const heading = "New Arrival"
    return(
        <div>
            <section className="mb-28 mt-24">
                <section className="flex justify-center">
                    <section className="w-[81vw] grid gap-12 border-black border">
                        <section className="border border-black">
                        <SectionName name={sectName}  head={heading}/>
                        </section>
                      
                        <section className="grid grid-cols-2 gap-5">
                        <section className="w-[510px] h-[600px]">
                        <div className="w-full h-full rounded bg-black flex justify-center ">
                            <div className="flex items-end bg-[#000]">

                            <Image className="w-[450px] h-[511px]" src={"/ps.png"} width={500} height={500} alt="playStation"></Image>
                            <div className="bg-purple-20 flex flex-col text-white w-[242px] absolute z-10 mb-10">
                                <div className="pb-5">
                                    <h1 className="text-2xl font-semibold pb-4">PlayStation 5</h1>
                                    <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                                </div>
                                <Link href={""} className="text-base font-medium underline underline-offset-4">Shop Now</Link>
                            </div>
                            </div>
                        </div>
                        </section>
                        <section className="w-[510px] h-[600px]  grid grid-cols-2 grid-rows-2 gap-8">
                        <div className="w-full h-full rounded bg-purple-300 col-span-2">
                            <div className="flex items-end bg-[#000] justify-end">
                                    <Image className="w-[432px] h-[286px]" src={"/womenColec.png"} alt="womenCollection" width={400} height={400}></Image>
                            <div className="bg-teal-20 flex flex-col mr-56 mb-5 text-white w-[262px] absolute z-10">
                                <div className="pb-5">
                                    <h1 className="text-2xl font-semibold pb-4">Women's Collections</h1>
                                    <p className="text-sm">Featured woman collections that give you another vibe.</p>
                                </div>
                                <Link href={""} className="text-base font-medium underline underline-offset-4">Shop Now</Link>
                            </div>
                            </div>
                        </div>
                        <div className="w-full h-full rounded bg-pink-400">
                        <div className="w-full h-full rounded bg-black flex justify-center ">
                            <div className="flex items-end bg-[#000]">
                            <Image className="w-[190px] h-[221px]" src={"/speakers.png"} width={500} height={500} alt="speakers"></Image>
                            <div className="bg-purple-20 flex flex-col text-white w-[242px] absolute z-10 mb-10">
                                <div className="pb-5">
                                    <h1 className="text-2xl font-semibold pb-4">Speakers</h1>
                                    <p className="text-sm">Amazon wireless speakers</p>
                                </div>
                                <Link href={""} className="text-base font-medium underline underline-offset-4">Shop Now</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-full h-full rounded bg-green-300">
                        <div className="w-full h-full rounded bg-black flex justify-center ">
                            <div className="flex items-end bg-[#000]">
                            <Image className="w-[190px] h-[221px]" src={"/oud.png"} width={500} height={500} alt="oud"></Image>
                            <div className="bg-purple-20 flex flex-col text-white w-[242px] absolute z-10 mb-10">
                                <div className="pb-5">
                                    <h1 className="text-2xl font-semibold pb-4">Perfumes</h1>
                                    <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                                </div>
                                <Link href={""} className="text-base font-medium underline underline-offset-4">Shop Now</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        </section>
                        </section>
                    
                    </section>
                </section>
            </section>
            <BorderBottom/>
        </div>
    )
}

export default Featured