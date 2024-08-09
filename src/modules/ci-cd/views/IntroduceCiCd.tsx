import { Typography } from "antd";
import styles from "./IntroduceCiCd.module.scss";

const { Title } = Typography;

export function IntroduceCiCd() {
    return (
        <div className={styles.container}>
            <Title level={3}>IntroduceCiCd</Title>
        </div>
    );
}
