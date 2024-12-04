import Link from "next/link"
export default function Header(){
    return(
        <div>
        <header className="bg-black text-white flex justify-center w-full h-12">
            <section className="w-[70vw] flex justify-between ml-32 items-center">
                <div className="flex justify-center gap-4 ">
                <div className="font-normal text-sm leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
                <div className="font-semibold text-sm leading-5">
                <Link href="" className="underline">ShopNow</Link> 
                </div>
                </div>
                <div>
                    <select name="languages" id="lang" className="bg-black cursor-pointer">
                        <option value="lang">English</option>
                        <option value="lang">Urdu</option>
                    </select>
                </div>
            </section>
        </header>
        </div>
    )
}