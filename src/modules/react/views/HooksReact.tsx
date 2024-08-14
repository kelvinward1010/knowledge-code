import { Typography } from "antd";
import styles from "./HooksReact.module.scss";

const { Title } = Typography;

export function HooksReact() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is HooksReact</Title>
        </div>
    );
}
