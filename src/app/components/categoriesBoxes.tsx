import Image from "next/image"
const CategoriesBoxes = (props:any) => {
  return (
    <div>
            <div style={{backgroundColor: props.bg}} className=" w-[150px] h-[145px] border border-black flex justify-center items-center flex-col gap-4">
                <Image className="w-14 h-14" src={props.image} alt={props.alt} width={200} height={200}></Image>
                <p className="text-base">{props.name}</p>
            </div>
    </div>
  )
}

export default CategoriesBoxes