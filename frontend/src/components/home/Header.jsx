import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./styles/Header.scss";
import { useTheme } from "../../context/ThemeContext";
import FixedTop from "./FixedTop";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // 최초 진입 시 상태 동기화
        handleScroll();

        // 성능을 위해 passive 옵션
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
            <div className="inner">
                <h4>LOGO</h4>
                <div className="right-wrap">
                    <Nav />
                    <button className="btn" onClick={toggleTheme}>
                        {theme}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
