import { IQuickLinks } from "@/types/component";
import styles from "./QuickLinks.module.scss";
import { useState } from "react";

interface QuickLinksProps {
    list: IQuickLinks[];
}

export function QuickLinks({ list }: QuickLinksProps) {
    const [activeLink, setActiveLink] = useState<string>("");
    const handleClick = (key: string) => {
        setActiveLink(key);
    };
    return (
        <ul className={styles.container}>
            {list.map((link, idx) => (
                <li key={idx}>
                    <a
                        href={`#${link.key}`}
                        className={
                            activeLink === link.key ? styles.activeLink : ""
                        }
                        onClick={() => handleClick(link.key)}
                    >
                        {link.lable}
                    </a>
                </li>
            ))}
        </ul>
    );
}
