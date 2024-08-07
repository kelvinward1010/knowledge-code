import { Typography } from "antd";
import styles from "./InterviewReact.module.scss";

const { Title } = Typography;

export function InterviewReact() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is InterviewReact</Title>
        </div>
    );
}
