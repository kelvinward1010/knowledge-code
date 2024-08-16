import { Typography } from "antd";
import styles from "./InterviewNodeJS.module.scss";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";
import { IDataStatic } from "@/types/data";
import { takeData } from "@/utils/data";
import { dataInterviewNodejs } from "../data";
import { useFollowWidth } from "@/hooks/useFollowWidth";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. NodeJS là gì?",
    },
    {
        key: "heading2",
        lable: "2. Hãy giải thích về mô hình I/O non-blocking trong NodeJS?",
    },
    {
        key: "heading3",
        lable: "3. RESTful API (Representational State Transfer) là gì?",
    },
];

export function InterviewNodeJS() {
    const { isBigger, isSmaller } = useFollowWidth(768);
    const data1: IDataStatic = takeData("heading1", dataInterviewNodejs);
    const data2: IDataStatic = takeData("heading2", dataInterviewNodejs);
    const data3: IDataStatic = takeData("heading3", dataInterviewNodejs);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
                <div className={styles.box}>
                    <Title level={5} id="heading1">
                        {list[0].lable}
                    </Title>
                    <TextConfig textdata={data1.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading2">
                        {list[1].lable}
                    </Title>
                    <TextConfig textdata={data2.data[0]} />
                    <TextConfig textdata={data2.data[1]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading3">
                        {list[1].lable}
                    </Title>
                    <TextConfig textdata={data3.data[0]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data3.data[1]}
                    />
                    <TextConfig textdata={data3.data[2]} />
                    <TextConfig textdata={data3.data[3]} />
                    <TextConfig textdata={data3.data[4]} />
                    <TextConfig textdata={data3.data[5]} />
                    <TextConfig textdata={data3.data[6]} />
                    <TextConfig textdata={data3.data[7]} />
                    <TextConfig textdata={data3.data[8]} />
                    <TextConfig textdata={data3.data[9]} />
                    <TextConfig textdata={data3.data[10]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
