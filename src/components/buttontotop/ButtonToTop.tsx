import { useEffect, useState } from "react";
import styles from "./ButtonToTop.module.scss";
import { ButtonConfig } from "../buttonconfig";
import { ArrowUpOutlined } from "@ant-design/icons";

function ButtonToTop() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        window.scrollY >= 1000 ? setShowButton(true) : setShowButton(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {showButton ? (
                <ButtonConfig
                    icon={<ArrowUpOutlined />}
                    onClick={scrollToTop}
                    className={styles.scrollToTop}
                />
            ) : null}
        </>
    );
}

export default ButtonToTop;
