import { Typography } from "antd";
import styles from "../style.module.scss";

const { Title } = Typography;

export function InterviewJavaScript() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is InterviewJavaScript</Title>
        </div>
    );
}
