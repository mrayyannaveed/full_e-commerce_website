import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <div>
            <nav className="flex justify-center border-b-[0.5px] pb-6">
                <section className="flex h-10 items-center justify-between w-[80vw] mt-12">

                <section className="flex  justify-between w-[50vw] border-2 border-blue-50">
                    <h1 className="text-2xl font-bold leading-6">Exclusive</h1>
                    <div>
                        <ul className="flex gap-12">
                            <li><Link className="hover:underline" href="/">Home</Link></li>
                            <li><Link className="hover:underline" href="">Contact</Link></li>
                            <li><Link className="hover:underline" href="">About</Link></li>
                            <li><Link className="hover:underline" href="">Sign Up</Link></li>
                        </ul>
                    </div>
                </section>
                <section className="flex justify-between items-center  bg-red-40">
                    <section className="bg-slate-50">
                        <div className="flex items-center py-1 justify-around w-60 bg-yellow-20">
                            <input className="text-xs h-[18px] w-40 leading-[18px]" type="text" placeholder="What are you looking for?"/>
                            <Image className="w-5 h-[20px]" src={"/vector.png"} width={10} height={1} alt="search"></Image>
                        </div>
                    </section>
                    <section>
                        <ul className="flex gap-1 cursor-pointer">
                            <li className="w-9"><Image className="h-[23px] w-7" src={"/Wishlist.png"} width={20} height={17} alt="search"></Image></li>
                            <li className="w-9"><Image className="h-[23px] w-7" src={"/Cart1.png"} width={20} height={17} alt="search"></Image></li>
                            <li className="w-9" id="li"><Image className="h-[23px] w-7" src={"/user.png"} width={20} height={17} alt="search"></Image>
                                <ul id="submenu" className=" opacity-0 absolute top-32 hidde text-white flex flex-col gap-4 right-14 my-2  bg-slate-400 transition: opacity 0.3s ease-in-out;
                                ">
                                    <li className="p-1 hover:bg-red-400"><Link href="">Manage My Account</Link></li>
                                    <li className="p-1 hover:bg-red-400"><Link href="">My Order</Link></li>
                                    <li className="p-1 hover:bg-red-400"><Link href="">My Cancellations</Link></li>
                                    <li className="p-1 hover:bg-red-400"><Link href="">My Reviews</Link></li>
                                    <li className="p-1 hover:bg-red-400"><Link href="">Log Out</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </section>
                </section>
                </section>
            </nav>
        </div>
    )
}