import { cn } from "@/lib/utils"; // shadcn utility to merge class names
import Image from "next/image";

type ProductCardProps = {
  imageSrc: string;
  title: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating?: number; // 0-5
  currency?: string;
};

export function ProductCard({
  imageSrc,
  title,
  price,
  originalPrice,
  discountPercent,
  rating = 4,
  currency = "تومان",
}: ProductCardProps) {
  return (
    <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-md rounded-2xl">
      {/* Image & Discount Badge */}
      <div className="relative mb-2 md:mb-5">
        <Image
          src={imageSrc}
          alt={title}
          width={160}
          height={160}
          className="w-32 mx-auto md:w-auto object-contain"
        />
        {discountPercent && (
          <span className="absolute top-1.5 right-1.5 h-5 md:h-[30px] text-xs md:text-base font-semibold bg-orange-300 text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full">
            {discountPercent}%
          </span>
        )}
      </div>

      {/* Title */}
      <h5 className="font-medium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2">
        {title}
      </h5>

      {/* Price */}
      <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 items-center">
        <div className="text-teal-600 dark:text-emerald-500">
          <span className="font-semibold text-base md:text-xl">
            {price.toLocaleString()}
          </span>
          <span className="text-xs md:text-sm tracking-tighter ml-1">
            {currency}
          </span>
        </div>

        {originalPrice && (
          <div className="line-through text-zinc-400 text-xs md:text-xl">
            {originalPrice.toLocaleString()}
            <span className="hidden xl:inline text-sm tracking-tighter ml-1">
              {currency}
            </span>
          </div>
        )}
      </div>

      {/* Actions & Rating */}
      <div className="flex items-center justify-between mt-2.5">
        <div className="flex items-center gap-x-2.5 md:gap-x-3">
          <button
            className={cn(
              "flex items-center justify-center w-[26px] h-[26px] md:w-9 md:h-9",
              "bg-gray-100 hover:bg-teal-600 text-gray-400 dark:bg-zinc-800 dark:hover:bg-emerald-500",
              "hover:text-white rounded-full transition-all"
            )}
          >
            <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
              <use href="#shopping-cart" />
            </svg>
          </button>

          <button className="text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 transition-all">
            <svg className="w-4 h-4 md:w-6 md:h-6">
              <use href="#arrows-right-left" />
            </svg>
          </button>
        </div>

        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn(
                "w-4 h-4 md:w-6 md:h-6",
                i >= rating ? "text-gray-300 dark:text-gray-400" : ""
              )}
            >
              <use href="#star" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
