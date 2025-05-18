import { CartHover } from "@/components/FloatCart";
import CoffeeSection from "@/components/heroSec";
import { LoginForm } from "@/components/login-form";
import { ProductCard } from "@/components/ProductSlide";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
        {/* <LoginForm /> */}
        {/* <ProductCard
          imageSrc="/images/products/p1.png"
          price={3000}
          title="name"
        />
        <CartHover
          totalAmount={350000}
          items={[
            {
              id: 1,
              title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی",
              image: "/assets/p1-8CrcwGuz.png",
              price: 175000,
              discount: "14.500 تومان تخفیف",
            },
          ]}
          isOpen={true}
        /> */}
        <CoffeeSection/>
      {/* </div> */}
    </>
  );
}
