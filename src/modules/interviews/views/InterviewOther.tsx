import { Typography } from "antd";
import styles from "./InterviewOther.module.scss";

const { Title } = Typography;

export function InterviewOther() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is InterviewOther</Title>
        </div>
    );
}
