import Image from "next/image"
import Link from "next/link"
function Footer(){
    return(
        <div>
            <footer className="bg-black text-white mt-20">
                <section className="flex items-center justify-center w-full h-[440px]">

                <section className="w-[85vw]  border-blue-400 flex justify-between">
                    <section className=" h-[202px]">
                        <section className="mb-5">
                            <div className="flex flex-col gap-6 pb-5">
                            <h1 className="font-bold text-2xl ">Exclusive</h1>
                            <h2 className="font-medium text-xl">Subscribe</h2>
                            </div>
                            <p className="font-normal text-base">Get 10% off your first order</p>
                        </section>
                        <div className="flex gap-5 w-[217px] justify-center py-3 border">
                            <input type="email" placeholder="Enter your email" className="bg-black h-6 w-36 "/>
                            <Image src={"/icon-send.png"} height={24} width={24} alt="icon-send"></Image>
                        </div>
                    </section>
                    <section className="flex flex-col gap-6 pb-5  h-[200px]">
                        <h1 className="font-bold text-2xl">Support</h1>
                        <section>
                            <div className="mb-7 text-base">
                                <p>111 Bijoy sarani, Dhaka,</p>
                                <p>DH 1515, Bangladesh.</p>
                            </div>
                            <p className="mb-6 text-base">exclusive@gmail.com</p>
                            <p className="text-base">+88015-88888-9999</p>
                            <div></div>
                        </section>
                    </section>
                    <section className="flex flex-col gap-6 pb-5 ">
                    <h1 className="font-bold text-2xl">Account</h1>
                    <div>
                        <ul className="text-base flex flex-col gap-2">
                            <li><Link href="">My Account</Link></li>
                            <li><Link href="">Login / Register</Link></li>
                            <li><Link href="">Cart</Link></li>
                            <li><Link href="">Wishlist</Link></li>
                            <li><Link href="">Shop</Link></li>
                        </ul>
                    </div>
                    </section>
                    <section className="flex flex-col gap-6 pb-5 ">
                    <h1 className="font-bold text-2xl">Quick Link</h1>
                    <div>
                        <ul className="text-base flex flex-col gap-2">
                            <li><Link href="">Privacy Policy</Link></li>
                            <li><Link href="">Terms of use</Link></li>
                            <li><Link href="">FAQ</Link></li>
                            <li><Link href="">Contact</Link></li>
                        </ul>
                    </div>
                    </section>
                    <section className="flex flex-col gap-6 pb-5 ">
                    <h1 className="font-bold text-2xl">Download App</h1>
                    <div>
                        <p>Save $3 with App New User Only</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            <Image className="w-20 h-20 row-span-2" src={"/QrCode.png"} alt="QrCode" width={50} height={20}></Image>
                            <Image className="w-[124px] h-[40px]" src={"/GooglePlay1.png"} alt="GooglePlay" width={80} height={50}></Image>
                            <Image className="w-[124px] h-[40px]" src={"/appstore1.png"} alt="AppStore" width={80} height={45}></Image>
                    </div>
                    <div className="flex justify-between w-[168px]">
                        <Link href={"https://www.facebook.com/rayyan.naveed.33?mibextid=ZbWKwL"} target="_blank"><Image className="w-6 h-6 cursor-pointer" src={"/Facebook.png"} alt="Facebook" width={24} height={24}></Image></Link>
                        <Link href={"https://www.twitter.com/"} target="_blank"><Image className="w-6 h-6 cursor-pointer" src={"/Group.png"} alt="X" width={24} height={24}></Image></Link>
                        <Link href={"https://www.instagram.com/"} target="_blank"><Image className="w-6 h-6 cursor-pointer" src={"/instagram.png"} alt="Instagram" width={24} height={24}></Image></Link>
                        <Link href={"https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/"} target="_blank"><Image className="w-6 h-6 cursor-pointer" src={"/Linkedin.png"} alt="Linkedin" width={24} height={24}></Image></Link>
                    </div>
                    </section>
                </section>
                </section>
                <div className="flex justify-center h-10"><p>Copyright Rimel 2022. All right reserved</p></div>
            </footer>
        </div>
    )
}

export default Footer