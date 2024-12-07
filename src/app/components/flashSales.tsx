import React from 'react'
import Image from 'next/image'
import BorderBottom from './borderBottom'
import SectionName from './sectionName'
import ProductBoxes from './productBoxes'
import { Button } from '@/components/ui/button'
import New from '../../app/components/new'
const FlashSales = () => {
    let sectName = "Today's"
    let heading = "Flash Sales"

    type pro = {
        productImage: string;
        productAlt: string;
        productName: string;
        productPrice: string;
        productOldPrice?: string;
        productRating: string;
        rateAlt: string; 
        new?: {};  
    };
    
    let myproducts: pro[] = [
        {productImage: "/Gamingpad.png", productAlt: "Gamingpad", productName: "HAVIT HV-G92 Gamepad", productPrice: "$120", productRating: "/Five.png", rateAlt: "rating", productOldPrice: "$160", new:<New bg={"#DB4444"} text={"-40%"}/>},
        {productImage: "/Keyboard.png", productAlt: "Keyboard", productName: "AK-900 Wired Keyboard", productPrice: "$960", productRating: "/Four.png", rateAlt: "rating", productOldPrice: "$1160", new:<New bg={"#DB4444"} text={"-35%"}/> },
        {productImage: "/Monitor.png", productAlt: "Monitor", productName: "IPS LCD Gaming Monitor", productPrice: "$370", productRating: "/Five.png", rateAlt: "rating", productOldPrice: "$400", new:<New bg={"#DB4444"} text={"-30%"}/>},
        {productImage: "/Chair.png", productAlt: "Chair", productName: "S-Series Comfort Chair", productPrice: "$375", productRating: "/FourHalf.png", rateAlt: "rating", productOldPrice: "$400", new:<New bg={"#DB4444"} text={"-25%"}/>},
    ];
    
return (
    <div>
        <section className="flex justify-center">
            <section className='w-[81vw] mb-28 mt-24'>
                <section className=" bg-purple-30">
                    <section className="flex justify-between mb-10">
                        <div className="flex bg-blue-20 gap-20">
                            <SectionName name={sectName} head={heading}/>
                            <div className='flex items-end my-3'>
                            <Image className='w-[302px] h-[50px]' src={"/Timer2.png"} alt='timer' width={300} height={300}></Image>
                            </div>
                        </div>
                        <div className="flex gap-4 items-end cursor-pointer">
                            <Image className="w-6 h-6" src={"/blleftArrow.png"} alt="leftArrow" width={24} height={24}></Image>    
                            <Image className="w-6 h-6" src={"/blrightArrow.png"} alt="rightArrow" width={24} height={24}></Image>    
                        </div>
                    </section>
                </section>
                <section className="grid grid-cols-4 gap-4">

                    {myproducts.map((product) => {
                        return(
                            <div> 
                                <ProductBoxes image={product.productImage} alt={product.productAlt} name={product.productName} price={product.productPrice} rating={product.productRating} alt2={product.rateAlt}  new ={product.new} />
                            </div>
                            
                        )
                    })}
                    </section>
                    <div className="text-center pt-10">
                        <Button className="bg-[#DB4444] w-[234px] rounded text-[#FAFAFA] hover:bg-[#ffecec] transition-all duration-300 hover:text-black">View All Products</Button>
                    </div>
            </section>
        </section>
        <BorderBottom/>
    </div>
    )
}


export default FlashSales