import { Typography } from "antd";
import styles from "./style.module.scss";

const { Title } = Typography;

export function DockerVsJenkins() {
    return (
        <div className={styles.container}>
            <Title level={3}>DockerVsJenkins</Title>
        </div>
    );
}
