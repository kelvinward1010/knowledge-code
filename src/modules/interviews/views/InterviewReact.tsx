import { Typography } from "antd";
import styles from "./InterviewReact.module.scss";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import { dataReact } from "../data";
import { IDataStatic } from "@/types/data";
import { takeData } from "@/utils/data";

const { Title, Text } = Typography;

const list = [
    {
        key: "heading1",
        lable: "What is React?",
    },
    {
        key: "heading2",
        lable: "Các chức năng chính trong React?",
    },
    {
        key: "heading3",
        lable: "DOM ảo là gì, nó hoạt động như thế nào?",
    },
];

export function InterviewReact() {
    const data1: IDataStatic = takeData("heading1", dataReact);
    const data2: IDataStatic = takeData("heading2", dataReact);
    const data3: IDataStatic = takeData("heading3", dataReact);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <Title level={5} id="heading1">
                        1. What is React?
                    </Title>
                    <Text>{data1.data[0]}</Text>
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading2">
                        2. Các chức năng chính trong React?
                    </Title>
                    <Text className={styles.textcontent}>{data2.data[0]}</Text>
                    <br />
                    <Text className={styles.textcontent}>{data2.data[1]}</Text>
                    <br />
                    <Text className={styles.textcontent}>{data2.data[2]}</Text>
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading3">
                        3. DOM ảo là gì, nó hoạt động như thế nào?
                    </Title>
                    <Text className={styles.textcontent}>{data3.data[0]}</Text>
                    <br />
                    <Text className={styles.textcontent}>{data3.data[1]}</Text>
                    <br />
                    <Text className={styles.textcontent}>{data3.data[2]}</Text>
                    <br />
                    <Text className={styles.textcontent}>{data3.data[3]}</Text>
                    <br />
                </div>
            </div>
            <QuickLinks list={list} />
        </div>
    );
}
