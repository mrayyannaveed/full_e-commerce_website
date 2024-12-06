import Image from "next/image";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { Button } from "../../components/ui/button";
import New from "./new";
const ProductBoxes = (props: any) => {
  return (
    <div>
      <section className="">
        <div className="bg-[#F5F5F5] grid gap-3" id="btn_div">
            {/* {props.new} */}
            <New/>
          <span className="flex flex-col gap-2 items-end px-4">
            <Heart className="cursor-pointer" />
            <Eye className="cursor-pointer" />
          </span>
          <div className="flex justify-center">
            <Image
              className="w-32 h-32"
              src={props.image}
              alt={props.alt}
              width={400}
              height={400}
            ></Image>
          </div>
          <div className="text-center my-5" id="btn">
            <Button className="bg-black w-full text-white"  variant="outline">Add to Cart</Button>
        </div>
        <div className="">
            <span className="text-center text-base">{props.name}</span>
            <div className="flex gap-2">
                <p className="text-center text-xs text-red-400">{props.price}</p>
                <Image className="w-[100px]" src={props.rating} alt={props.alt2} width={100} height={100}></Image>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default ProductBoxes;
