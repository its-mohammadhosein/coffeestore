'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  discount?: string;
};

type CartHoverProps = {
  items?: CartItem[];
  totalAmount?: number;
  isOpen?: boolean; // ← Optional external control
  setIsOpen?: (value: boolean) => void; // ← Optional external setter
};

export function CartHover({
  items = [],
  totalAmount = 0,
  isOpen: isOpenProp,
  setIsOpen: setIsOpenProp,
}: CartHoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  // Determine control: external or internal
  const isControlled = typeof isOpenProp === 'boolean';
  const isOpen = isControlled ? isOpenProp : internalOpen;
  const setIsOpen = isControlled ? setIsOpenProp! : setInternalOpen;

  const isEmpty = items.length === 0;

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-3"
        aria-label="Toggle cart preview"
      >
        <svg className="w-8 h-8">
          <use href="#shopping-cart" />
        </svg>
      </button>

      {/* Dropdown Box */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 bg-white dark:bg-zinc-700 border-t-orange-300 border-t-[3px] shadow-normal rounded-2xl w-[400px] p-5 transition-all animate-in fade-in zoom-in">
          {/* Header */}
          <div className="flex items-center justify-between tracking-tighter font-medium text-xs">
            <span className="text-gray-300">
              {isEmpty ? 'سبد خرید خالی است' : `${items.length} مورد`}
            </span>
            {!isEmpty && (
              <Link href="/cart" className="flex items-center text-orange-300">
                مشاهده سبد خرید
                <svg className="w-5 h-5 ml-1">
                  <use href="#chevron-left-mini" />
                </svg>
              </Link>
            )}
          </div>

          {/* Body */}
          {!isEmpty ? (
            <div className="border-b pb-1 border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 max-h-[300px] overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-x-2.5 py-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] object-contain"
                  />
                  <div className="flex flex-col justify-between">
                    <h4 className="font-medium text-zinc-700 dark:text-white text-base line-clamp-2">
                      {item.title}
                    </h4>
                    <div>
                      {item.discount && (
                        <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                          {item.discount}
                        </span>
                      )}
                      <div className="text-zinc-700 dark:text-white font-semibold">
                        {item.price.toLocaleString()}
                        <span className="font-normal text-sm ml-1">تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-sm text-gray-400 dark:text-gray-500 font-Dana">
              آیتمی در سبد خرید نیست
            </div>
          )}

          {/* Footer */}
          {!isEmpty && (
            <div className="flex justify-between pt-5">
              <div>
                <span className="text-gray-300 text-xs tracking-tight">
                  مبلغ قابل پرداخت
                </span>
                <div className="text-zinc-700 dark:text-white font-semibold text-xl">
                  {totalAmount.toLocaleString()}
                  <span className="font-normal text-sm ml-1">تومان</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="w-[144px] h-14 flex items-center justify-center font-normal text-xl text-white bg-teal-600 dark:bg-teal-700 dark:hover:bg-emerald-600 transition-colors rounded-xl tracking-tight"
              >
                ثبت سفارش
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
