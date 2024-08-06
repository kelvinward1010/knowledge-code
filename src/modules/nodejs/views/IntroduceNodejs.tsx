import { Typography } from "antd";
import styles from "./Nodejs.module.scss";

const { Title } = Typography;

export function IntroduceNodejs() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is IntroduceNodejs</Title>
        </div>
    );
}
