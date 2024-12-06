import Hero from "./components/hero-section";
import Featured from "./components/featured";
import Services from "./components/services";
import Products from "./components/products";

export default function Home(){
  let services = [
    {serviceImg: "/delivery.png", serviceAlt: "delivery", serviceHead: "FREE AND FAST DELIVERY", serviceDesc: "Free delivery for all orders over $140"},
    {serviceImg: "/customerSer.png", serviceAlt: "customerService", serviceHead: "24/7 CUSTOMER SERVICE", serviceDesc: "Friendly 24/7 customer support"},
    {serviceImg: "/MoneyBack.png", serviceAlt: "MoneyBack", serviceHead: "MONEY BACK GUARANTEE", serviceDesc: "We reurn money within 30 days"}
  ]
  return(
    <div>
      <Hero/>
      <Featured/>
      <Products/>
      <div className="flex justify-between w-[930px] m-auto">
      
      {services.map((serve) => {
        return(
          <div>  
            <Services image={serve.serviceImg} alt={serve.serviceAlt} head={serve.serviceHead} desc={serve.serviceDesc}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}
