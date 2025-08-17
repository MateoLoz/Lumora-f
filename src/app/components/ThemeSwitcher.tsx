"use client";
import { useEffect, useState } from "react";

const OPTIONS = [
  { value: "light-1", label: "Light 1 — Polar" },
  { value: "light-2", label: "Light 2 — Sand" },
  { value: "light-3", label: "Light 3 — Ash" },
  { value: "dark-3",  label: "Dark 3 — Noir" },
  { value: "dark-2",  label: "Dark 2 — Aether" },
  { value: "dark-1",  label: "Dark 1 — Carbon" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("lumora:theme");
    const initial = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark-1" : "light-1");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const onChange = (value: string) => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem("lumora:theme", value);
  };

  return (
    <div className="z-2">
    <label style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      <span style={{ opacity: .8 }}>Tema</span>
      <select value={theme} onChange={(e) => onChange(e.target.value)}>
        {OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
    </div>
  );
}
