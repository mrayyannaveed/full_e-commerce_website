import Link from "next/link"
import Image from "next/image"
const Hero = () => {
    return(
        <div className="flex mb-32">
            <section className="border-r-[0.5px]">
                <div className="border border-black w-[217px] h-[344px] ml-32 mt-10 mr-3">
                    <ul className="flex flex-col gap-4 text-base">
                        <li className="flex justify-between items-center"><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Woman's Fashion</Link>
                        <Image className="w-3 h-4" src={"/rightVector.png"} alt="rightVector" height={4} width={10}></Image></li>
                        <li className="flex justify-between items-center "><Link className="hover:underline hover:decoration-4 hover:decoration-blue-400" href={""}>Men's Fashion</Link>
                        <Image className="w-3 h-4" src={"/rightVector.png"} alt="rightVector" height={4} width={10}></Image></li>
                        <li><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Electronics</Link></li>
                        <li><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Home & Lifestyle</Link></li>
                        <li><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Medicine</Link></li>
                        <li><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Sports & Outdoor</Link></li>
                        <li><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Babay's and Toys</Link></li>
                        <li><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Groceries & Pets</Link></li>
                        <li><Link className="hover:underline hover:decoration-blue-400 hover:decoration-4" href={""}>Health & Beauty</Link></li>
                    </ul>
                </div>
            </section>
            <span className="h-[344px] pl-1 w-[752px] bg-black ml-10 mt-10 flex text-white items-center">
            <section className="flex flex-col gap-5 w-1/2 pl-12">
                    <div className="flex w-[190px] items-center justify-between">
                    <Image className="w-[40px] h-[46px]" src={"/apple.png"} alt="apple" width={40} height={35}></Image>
                    <p>iPhone 14 Series</p>
                    </div>
                    <h1 className="text-5xl leading-[60px]">Up to 10% off Voucher</h1>
                    <section className="text-white flex gap-3 items-center">

                        <p><Link className="border-b-2 pb-1" href={""}>Shop Now</Link></p>
                        <Image className="w-5 h-5" src={"/rightArrow.png"} alt="rightArrow" width={105} height={100}></Image>
                    </section>
                </section>
                <section className="">
                    <Image className="w-[440px] object-cover h-[344px] " src={"/iphone.png"} alt="iphone" width={400} height={350}></Image>
                </section>
               
            </span>
        </div>
    )
}

export default Hero