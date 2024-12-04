import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <div>
            <nav className="flex justify-center ">
                <section className="flex bg-cyan-200 h-10 items-center justify-between w-[85vw] mt-12">

                <section className="flex  justify-between w-[50vw] border-2 border-blue-500">
                    <h1 className="text-2xl font-bold leading-6">Exclusive</h1>
                    <div>
                        <ul className="flex gap-12">
                            <li><Link href="">Home</Link></li>
                            <li><Link href="">Contact</Link></li>
                            <li><Link href="">About</Link></li>
                            <li><Link href="">Sign Up</Link></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <section>
                        <div className="flex items-center justify-around w-60 bg-yellow-200">
                            <input className="text-xs leading-[18px]" type="text" placeholder="What are you looking for?"/>
                            <Image src={"/vector.png"} width={20} height={10} alt="search"></Image>
                        </div>
                    </section>
                </section>
                </section>
            </nav>
        </div>
    )
}