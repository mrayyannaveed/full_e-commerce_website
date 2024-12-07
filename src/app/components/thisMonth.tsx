import Image from "next/image"
import SectionName from "./sectionName"
import BorderBottom from "./borderBottom"
import { Button } from "@/components/ui/button"
import ProductBoxes from "./productBoxes"
const ThisMonth = () => {
    let sectName = "This Month"
    let heading = "Best Selling Products"

    type pro = {
        productImage: string;
        productAlt: string;
        productName: string;
        productPrice: string;
        productOldPrice?: string;
        productRating: string;
        rateAlt: string; 
    };
    
    let myproducts: pro[] = [
        {productImage: "/coat.png", productAlt: "coat", productName: "Breed Dry Dog Food", productPrice: "$260", productRating: "/Five.png", rateAlt: "rating", productOldPrice: "$360"},
        {productImage: "/duffleBag.png", productAlt: "duffleBag", productName: "CANON EOS DSLR Camera", productPrice: "$960", productRating: "/FourHalf.png", rateAlt: "rating", productOldPrice: "$1160"},
        {productImage: "/CPU.png", productAlt: "CPU", productName: "ASUS FHD Gaming Laptop", productPrice: "$160", productRating: "/Five.png", rateAlt: "rating", productOldPrice: "$170"},
        {productImage: "/BookShelf.png", productAlt: "BookShelf", productName: "Curology Product Set", productPrice: "$360", productRating: "/Four.png", rateAlt: "rating"}
    ];

  return (
    <div>
        <section className="flex justify-center">
            <section className='w-[81vw] mb-28 mt-24 border border-black'>
                <section className=" bg-purple-30">
                    <section className="flex justify-between mb-10">
                        <div className="">
                            <SectionName name={sectName} head={heading}/>
                        </div>
                        <div className="flex items-end">
                              <Button className="rounded px-12 py-7 bg-[#DB4444] text-[#FAFAFA] hover:bg-[#ffecec] transition-all duration-300 hover:text-black">View All</Button>
                        </div>
                    </section>
                </section>
                <section className="grid grid-cols-4 gap-4">

                    {myproducts.map((product) => {
                        return(
                            <div>
                                <ProductBoxes image={product.productImage} alt={product.productAlt} name={product.productName} price={product.productPrice}
                                oldPrice={product.productOldPrice} rating={product.productRating} alt2={product.rateAlt} />
                            </div>
                            
                        )
                    })}
                    </section>
            </section>
        </section>
        <BorderBottom/>
    </div>
  )
}

export default ThisMonth