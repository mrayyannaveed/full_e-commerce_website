import Image from "next/image";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { Button } from "../../components/ui/button";
import New from "./new";
const ProductBoxes = (props: any) => {
  return (
    <div>
      <section className="">
        <div className="bg-[#F5F5F5]" id="btn_div">
          <span className="p-4 absolute">
            {props.new}
          </span>
          <span className="flex flex-col gap-2 items-end p-4">
            <Heart className="cursor-pointer" />
            <Eye className="cursor-pointer" />
          </span>
          <div className="flex justify-center items-center flex-col">
            <Image
              className="w-32 h-32"
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
            ></Image>
          <div className="relative">

          <div className="text-center my-5 hidden absolute translate-x-[-50%] left-[50%]" id="btn">
            <Button className="bg-black text-white" variant="outline">Add to Cart</Button>
        </div>
          </div>
          </div>
        <div className="mt-16 pb-2 bg-white">  
            <span className="text-center text-base">{props.name}</span>
            <div className="flex gap-2">
              
                <div className="flex gap-2 items-center">
                  <p className="text-center text-xs text-[#DB4444]">{props.price}</p>
                  <del className="text-center text-xs text-[#000000]">{props.oldPrice}</del>
                </div>
              
                <Image className="w-[100px]" src={props.rating} alt={props.alt2} width={100} height={100}></Image>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
};

export default ProductBoxes;
