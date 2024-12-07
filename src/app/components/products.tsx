import { Type } from "lucide-react"
import ProductBoxes from "./productBoxes"
import SectionName from "./sectionName"
import Image from "next/image"
import New from "./new"
import { Button } from "@/components/ui/button"
import BorderBottom from "./borderBottom"


const Products = () => {
    let sectName = "Our Products"
    let heading = "Explore Our Products"

    type pro = {
        productImage: string;
        productAlt: string;
        productName: string;
        productPrice: string;
        productRating: string;
        rateAlt: string; 
        new?: {};   
    };
    
    let myproducts: pro[] = [
        {productImage: "/dogFood.png", productAlt: "DogFood", productName: "Breed Dry Dog Food", productPrice: "$100", productRating: "/Three.png", rateAlt: "rating"},
        {productImage: "/camera.png", productAlt: "Camera", productName: "CANON EOS DSLR Camera", productPrice: "$360", productRating: "/Four.png", rateAlt: "rating"},
        {productImage: "/laptop.png", productAlt: "Laptop", productName: "ASUS FHD Gaming Laptop", productPrice: "$700", productRating: "/Five.png", rateAlt: "rating"},
        {productImage: "/curology.png", productAlt: "Curology", productName: "Curology Product Set", productPrice: "$500", productRating: "/Four.png", rateAlt: "rating"},
        {productImage: "/mercedes.png", productAlt: "Mercedes", productName: "Kids Electric Car", productPrice: "$960", productRating: "/Five.png", rateAlt: "rating", new: <New bg={"#00FF66"} text={"New"}/>},
        {productImage: "/shoes.png", productAlt: "Shoes", productName: "Jr. Zoom Soccer Cleats", productPrice: "$1160", productRating: "/Five.png", rateAlt: "rating", new: ""},
        {productImage: "/gamepad.png", productAlt: "Gamepad", productName: "GP11 Shooter USB Gamepad", productPrice: "$660", productRating: "/Five.png", rateAlt: "rating", new: <New bg={"#00FF66"} text={"New"}/>},
        {productImage: "/jacket.png", productAlt: "Jacket", productName: "Quilted Satin Jacket", productPrice: "$660", productRating: "/Five.png", rateAlt: "rating"},
    ];
    
    
  return (
    <div>
        <section className="flex justify-center">
            <section className="w-[90vw] md:w-[81vw] mt-24 mb-28 ">
                <section className=" bg-purple-30 ">
                    <section className="flex justify-between mb-10">
                        <div className="">
                            <SectionName name={sectName} head={heading}/>
                        </div>
                        <div className="flex gap-4 items-end cursor-pointer">
                            <Image className="w-6 h-6" src={"/blleftArrow.png"} alt="leftArrow" width={24} height={24}></Image>    
                            <Image className="w-6 h-6" src={"/blrightArrow.png"} alt="rightArrow" width={24} height={24}></Image>    
                        </div>
                    </section>
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {myproducts.map((product) => {
                        return(
                            <div>
                                <ProductBoxes image={product.productImage} alt={product.productAlt} name={product.productName} price={product.productPrice} rating={product.productRating} alt2={product.rateAlt} new={product.new}/>
                            </div>
                            
                        )
                    })}
                    </section>
                    <div className="text-center pt-10">
                        <Button className="bg-[#DB4444] w-[234px] rounded text-[#FAFAFA] hover:bg-[#ffecec] transition-all duration-300 hover:text-black">View All Products</Button>
                    </div>

                </section>
            </section>
        </section>
        <BorderBottom/>
    </div>
  )
}

export default Products