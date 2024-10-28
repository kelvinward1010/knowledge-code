import { Typography } from "antd";
import styles from "./style.module.scss";
import { takeData } from "@/utils/data";
import { IDataStatic } from "@/types/data";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";
import { dataInterviewHTMLCSS } from "../data";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. CSS Box Model",
    },
    {
        key: "heading2",
        lable: "3. Flexbox và Grid layout",
    },
    {
        key: "heading3",
        lable: "3. HTML Semantic Elements là gì?",
    },
];

export function InterviewHTMLCSS() {
    const { isBigger, isSmaller } = useFollowWidth(768);
    const data1: IDataStatic = takeData("heading1", dataInterviewHTMLCSS);
    const data2: IDataStatic = takeData("heading2", dataInterviewHTMLCSS);
    const data3: IDataStatic = takeData("heading3", dataInterviewHTMLCSS);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
                <div className={styles.box} id="heading1">
                    <Title level={5}>{list[0].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[0]}
                    />
                    <TextConfig textdata={data1.data[1]} />
                    <TextConfig textdata={data1.data[2]} />
                    <TextConfig textdata={data1.data[3]} />
                    <TextConfig textdata={data1.data[4]} />
                </div>
                <div className={styles.box} id="heading2">
                    <Title level={5}>{list[1].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data2.data[0]}
                    />
                    <TextConfig textdata={data2.data[1]} />
                    <TextConfig textdata={data2.data[2]} />
                    <TextConfig textdata={data2.data[3]} />
                    <TextConfig textdata={data2.data[4]} />
                    <TextConfig textdata={data2.data[5]} />
                    <TextConfig textdata={data2.data[6]} />
                    <TextConfig textdata={data2.data[7]} />
                    <TextConfig textdata={data2.data[8]} />
                    <TextConfig textdata={data2.data[9]} />
                    <TextConfig textdata={data2.data[10]} />
                    <TextConfig textdata={data2.data[11]} />
                    <TextConfig textdata={data2.data[12]} />
                    <TextConfig textdata={data2.data[13]} />
                    <TextConfig textdata={data2.data[14]} />
                    <TextConfig textdata={data2.data[15]} />
                    <TextConfig textdata={data2.data[16]} />
                </div>
                <div className={styles.box} id="heading3">
                    <Title level={5}>{list[1].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data3.data[0]}
                    />
                    <TextConfig textdata={data3.data[1]} />
                    <TextConfig textdata={data3.data[2]} />
                    <TextConfig textdata={data3.data[3]} />
                    <TextConfig textdata={data3.data[4]} />
                    <TextConfig textdata={data3.data[5]} />
                    <TextConfig textdata={data3.data[6]} />
                    <TextConfig textdata={data3.data[7]} />
                    <TextConfig textdata={data3.data[8]} />
                    <TextConfig textdata={data3.data[9]} />
                    <TextConfig textdata={data3.data[10]} />
                    <TextConfig textdata={data3.data[11]} />
                    <TextConfig textdata={data3.data[12]} />
                    <TextConfig textdata={data3.data[13]} />
                    <TextConfig textdata={data3.data[14]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
