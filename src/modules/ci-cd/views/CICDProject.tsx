import { Typography } from "antd";
import styles from "./style.module.scss";

const { Title } = Typography;

export function CICDProject() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Title level={3}>Read github:</Title>
                <a
                    href={"https://github.com/kelvinward1010/dk_jenkins"}
                    target={"_blank"}
                >
                    https://github.com/kelvinward1010/dk_jenkins
                </a>
            </div>
        </div>
    );
}
