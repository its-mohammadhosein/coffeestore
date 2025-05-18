import React from "react";

export default function CoffeeSection() {
  return (
    <section
      style={{ background: "url(/assets/headerBgDesktop-BGeojeth.webp)" }}
      className="home relative min-h-[200px] bg-contain xs:h-auto xs:aspect-[2/1] bg-mobile md:bg-desktop bg-no-repeat bg-[center_top]"
    >
      <div className="container overflow-y-hidden relative flex h-full md:min-h-screen items-center justify-end">
        <div className="text-white text-right">
          <h2 className="font-MorabbaBold md:text-[62px] text-2xl mb-1 md:mb-2">
            قهوه عربیکا تانزانیا
          </h2>
          <span className="font-MorabbaLight md:text-[64px] text-xl block mb-6 md:mb-8">
            یک فنجان بالانس !
          </span>
          <span className="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8" />
          <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>

        {/* circles */}
        <div className="circle circle--main circle--lg ml-8">
          <div className="circle circle--md">
            <div className="circle circle--sm" />
          </div>
        </div>
      </div>

      {/* curve */}
      <svg className="text-gray-100 dark:text-zinc-800 hidden md:inline-block absolute w-[100px] h-[22px] bottom-0 right-0 left-0 mx-auto">
        <use href="#curve" />
      </svg>

      {/* arrow-circle */}
      <div className="absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4 hidden md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full">
        <svg className="w-5 h-5 text-zinc-700 dark:text-white">
          <use href="#chevron-down-mini" />
        </svg>
      </div>
    </section>
  );
}
