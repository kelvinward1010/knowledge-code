import { Typography } from "antd";
import styles from "./InterviewNodeJS.module.scss";

const { Title } = Typography;

export function InterviewNodeJS() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is InterviewNodeJS</Title>
        </div>
    );
}
