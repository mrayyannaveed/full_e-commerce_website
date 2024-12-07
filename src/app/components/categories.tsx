import React from 'react'
import Image from 'next/image'
import SectionName from './sectionName'
import CategoriesBoxes from './categoriesBoxes'
import BorderBottom from './borderBottom'

const Categories = () => {
    let sectName = "Categories"
    let heading = "Browse By Category"

    type cat = {
        categoryImage: string;
        categoryAlt: string;
        categoryColor?: string;
    };
    
    let categories: cat[] = [
        { categoryImage: "/CategoryCellphone.png", categoryAlt: "Cellphone" },
        { categoryImage: "/CategoryComputer.png", categoryAlt: "Computer" },
        { categoryImage: "/CategorySmartWatch.png", categoryAlt: "SmartWatch" },
        { categoryImage: "/CategoryCamera.png", categoryAlt: "Camera", categoryColor: "#DB4444"},
        { categoryImage: "/CategoryHeadphone.png", categoryAlt: "Headphones" },
        { categoryImage: "/CategoryGamepad.png", categoryAlt: "Gaming" },
    ];
    
  return (
    <div>
        <section className="flex justify-center">
            <section className='w-[81vw] mb-28 mt-24'>
                <section className=" bg-purple-30">
                    <section className="flex justify-between mb-10">
                        <div className="">
                            <SectionName name={sectName} head={heading}/>
                        </div>
                        <div className="flex gap-4 items-end cursor-pointer">
                            <Image className="w-6 h-6" src={"/blleftArrow.png"} alt="leftArrow" width={24} height={24}></Image>    
                            <Image className="w-6 h-6" src={"/blrightArrow.png"} alt="rightArrow" width={24} height={24}></Image>    
                        </div>
                    </section>
                </section>
                <section className='grid grid-cols-2 gap-4 md:grid md:grid-cols-3 md:gap-5   lg:flex justify-between'>
                    {categories.map((category) => {
                        return(
                            <div>
                                <CategoriesBoxes image={category.categoryImage} alt={category.categoryAlt} bg={category.categoryColor} name={category.categoryAlt}/>
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

export default Categories