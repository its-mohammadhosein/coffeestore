"use client";

import { useState, useRef, useEffect } from "react";

interface SubMenuProps {
  trigger: React.ReactNode;
  links: { href: string; label: string }[];
}

export default function SubMenu({ trigger, links }: SubMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      ref={menuRef}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        {trigger}
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            borderTop: "3px solid #f97316",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            minWidth: "13rem",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            fontSize: "1rem",
            color: "#27272a",
          }}
        >
          {links.map((link, index) => (
            <a
              key={link.href + index} // or just index if href is repeated
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#27272a",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#27272a")}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
