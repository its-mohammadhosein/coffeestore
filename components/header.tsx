"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SubMenu from "./MgMenu";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    // Optionally: Trigger dark/light mode change here if needed (e.g., via classList or a state manager)
  };

  return (
    <header className="fixed z-50 right-0 left-0 top-9 w-[98%] lg:w-[90%] h-24 mx-auto bg-black/50 backdrop-blur-md px-5 lg:px-10 py-5 hidden md:flex items-center rounded-3xl">
      <div className="flex w-full justify-between items-center">
        {/* Logo & Menu */}
        <nav className="flex gap-x-6 lg:gap-x-9 items-center h-14">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/images/app-logo.png"
              alt="Golden Coffee"
              width={40}
              height={40}
            />
          </div>
          <ul className="flex gap-x-5 lg:gap-x-9 text-xl h-full leading-[56px] text-gray-300 tracking-tightest">
            <li className="font-DanaMedium text-orange-200">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="relative group">
              {/* <Link href="#" className="group-hover:text-orange-200 transition-colors">
                فروشگاه
              </Link>
              {/* Submenu 
              <div className="absolute w-52 top-full opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible p-6 space-y-4 text-base shadow-normal tracking-normal bg-white dark:text-white dark:bg-zinc-700 rounded-2xl border-t-[3px] border-t-orange-300 text-zinc-700 *:inline-block *:hover:text-orange-200 *:transition-colors delay-75">
                <Link href="#">قهوه ویژه</Link>
                <Link href="#">ویژه در سطح جهانی</Link>
                <Link href="#">قهوه درجه یک</Link>
                <Link href="#">ترکیبات تجاری</Link>
                <Link href="#">کپسول قهوه</Link>
                <Link href="#">قهوه زینو برزیلی</Link>
              </div> */}
              <SubMenu
                trigger={
                  <span style={{ color: "#fef3c7", fontWeight: "bold" }}>
                    فروشگاه
                  </span>
                }
                links={[
                  { href: "#", label: "قهوه ویژه" },
                  { href: "#", label: "ویژه در سطح جهانی" },
                  { href: "#", label: "قهوه درجه یک" },
                  { href: "#", label: "ترکیبات تجاری" },
                  { href: "#", label: "کپسول قهوه" },
                  { href: "#", label: "قهوه زینو برزیلی" },
                ]}
              />
            </li>
            <li>
              <Link href="#">دیکشنری</Link>
            </li>
            <li>
              <Link href="#">بلاگ</Link>
            </li>
            <li>
              <Link href="#">درباره ما</Link>
            </li>
            <li>
              <Link href="#">تماس با ما</Link>
            </li>
          </ul>
        </nav>

        {/* Theme toggle & Login */}
        <div className="flex gap-x-4 lg:gap-x-5 xl:gap-x-10 items-center text-orange-200">
          {/* Theme Switch */}
          <div className="flex items-center lg:gap-x-5 gap-x-4">
            <div className="cursor-pointer toggle-theme" onClick={toggleTheme}>
              {!darkMode ? (
                <svg className="w-8 h-8 inline-block">
                  <use href="#moon" />
                </svg>
              ) : (
                <svg className="w-8 h-8 inline-block">
                  <use href="#sun" />
                </svg>
              )}
            </div>
          </div>

          <span className="block w-px h-14 bg-white/20" />

          <Link href="#" className="flex tracking-tightest gap-x-[10px]">
            <svg className="w-8 h-8 rotate-180">
              <use href="#arrow-left-on-rectangle" />
            </svg>
            <span className="font-Dana text-xl hidden xl:inline-block">
              ورود | ثبت‌نام
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
