import { Typography } from "antd";
import styles from "./Home.module.scss";
import { Logo } from "@/assets/images";

const { Title } = Typography;

export function Home() {
    return (
        <div className={styles.container}>
            <Title level={3}>
                Knowledge is limitless, learn for a lifetime.
            </Title>
            <img src={Logo} alt="" />
        </div>
    );
}
