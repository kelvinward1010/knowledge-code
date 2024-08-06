import { Typography } from "antd";
import styles from "./React.module.scss";

const { Title } = Typography;

export function IntroduceReact() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is IntroduceReact</Title>
        </div>
    );
}
