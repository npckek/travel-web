import { useState, useEffect } from "react";

const Switch = () => {
    const getInitialTheme = () => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleDarkMode = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className="flex justify-center items-center">
            <input
                type="checkbox"
                id="theme-switch"
                className="relative appearance-none inline-block h-[30px] w-[54px] cursor-pointer rounded-full bg-white shadow-md transition-all duration-300
                after:content-sun after:absolute after:top-[1px] after:left-[1px] after:h-7 after:w-7 after:p-0.5 after:rounded-full after:bg-yellow-500 after:shadow-sm after:transition-all after:duration-300
                checked:bg-slate-300 checked:after:bg-gray-600 checked:after:translate-x-6 checked:after:content-moon"
                onChange={toggleDarkMode}
                checked={theme === "dark"}
            />
        </div>
    );
};

export default Switch;
