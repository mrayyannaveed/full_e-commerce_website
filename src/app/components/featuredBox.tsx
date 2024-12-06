// import Image from "next/image"
// import Link from "next/link"
// export default function FeaturedBox(props:any){
//     return(
//         <div>
//              <div className="w-full h-full rounded bg-black flex justify-center ">
//                 <div className="flex items-end bg-[#000]">
//                     <Image className="w-[190px] h-[221px]" src={props.image} width={500} height={500} alt="speakers"></Image>
//                 <div className="bg-purple-20 flex flex-col text-white w-[242px] absolute z-10 mb-10">
//                     <div className="pb-5">
//                         <h1 className="text-2xl font-semibold pb-4">props.head</h1>
//                         <p className="text-sm">{props.desc}</p>
//                     </div>
//                     <Link href={props.href} className="text-base font-medium underline underline-offset-4">{props.link}</Link>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }