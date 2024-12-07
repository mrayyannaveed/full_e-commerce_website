import Image from "next/image"
const Services = (props: any) => {
  return (
    <div>
        {/* <section className="m-auto w-[930px] bg-purple-300"> */}
            <section className="bg-blue-30 grid gap-8 mt-24 mb-28 w-[260px] h-48">
                <div className="bg-red-20 flex justify-center">
                <Image src={props.image} alt={props.alt} width={100} height={100}></Image>
                </div>
                <div className="grid gap-2 text-center">
                    <h1 className="text-xl font-semibold leading-5">{props.head}</h1>
                    <p className="text-sm leading-[21px]">{props.desc}</p>
                </div>
            </section>
        {/* </section> */}
    </div>
  )
}

export default Services