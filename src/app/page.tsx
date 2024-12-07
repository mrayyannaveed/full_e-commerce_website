import Hero from "./components/hero-section";
import Featured from "./components/featured";
import Services from "./components/services";
import Products from "./components/products";
import CategoriesAd from "./components/categoriesAd";
import Categories from "./components/categories";
import ThisMonth from "./components/thisMonth";
import FlashSales from "./components/flashSales";

export default function Home(){
  let services = [
    {serviceImg: "/delivery.png", serviceAlt: "delivery", serviceHead: "FREE AND FAST DELIVERY", serviceDesc: "Free delivery for all orders over $140"},
    {serviceImg: "/customerSer.png", serviceAlt: "customerService", serviceHead: "24/7 CUSTOMER SERVICE", serviceDesc: "Friendly 24/7 customer support"},
    {serviceImg: "/MoneyBack.png", serviceAlt: "MoneyBack", serviceHead: "MONEY BACK GUARANTEE", serviceDesc: "We reurn money within 30 days"}
  ]
  return(
    <div>
      <Hero/>
      <FlashSales/>
      <Categories/>
      <ThisMonth/>
      <CategoriesAd/>
      <Products/>
      <Featured/>
      <section className="flex justify-center items-center ">

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-14 xl:gap-16 m-auto">
      
      {services.map((serve) => {
        return(
          <div>  
            <Services image={serve.serviceImg} alt={serve.serviceAlt} head={serve.serviceHead} desc={serve.serviceDesc}/>
          </div>
        )
      })}
      </div>
      </section>
    </div>
  )
}
