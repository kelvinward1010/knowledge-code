import { Typography } from "antd";
import styles from "./InterviewNodeJS.module.scss";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";
import { IDataStatic } from "@/types/data";
import { takeData } from "@/utils/data";
import { dataInterviewNodejs } from "../data";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. NodeJS là gì?",
    },
];

export function InterviewNodeJS() {
    const data1: IDataStatic = takeData("heading1", dataInterviewNodejs);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <Title level={5} id="heading1">
                        1. NodeJS là gì?
                    </Title>
                    <TextConfig textdata={data1.data[0]} />
                </div>
            </div>
            <QuickLinks list={list} />
        </div>
    );
}
