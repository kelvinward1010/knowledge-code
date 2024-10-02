import { Typography } from "antd";
import styles from "./style.module.scss";
import { dataInterviewOther } from "../data";
import { takeData } from "@/utils/data";
import { IDataStatic } from "@/types/data";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. Sự khác nhau giữa cookie, localStorage, và sessionStorage",
    },
    {
        key: "heading2",
        lable: "3. SQL và NoSQL",
    },
];

export function InterviewOther() {
    const { isBigger, isSmaller } = useFollowWidth(768);
    const data1: IDataStatic = takeData("heading1", dataInterviewOther);
    const data3: IDataStatic = takeData("heading2", dataInterviewOther);

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
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[5]}
                    />
                    <TextConfig textdata={data1.data[6]} />
                    <TextConfig textdata={data1.data[7]} />
                    <TextConfig textdata={data1.data[8]} />
                    <TextConfig textdata={data1.data[9]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[10]}
                    />
                    <TextConfig textdata={data1.data[11]} />
                    <TextConfig textdata={data1.data[12]} />
                    <TextConfig textdata={data1.data[13]} />
                    <TextConfig textdata={data1.data[14]} />
                    <TextConfig textdata={data1.data[15]} />
                </div>
                <div className={styles.box} id="heading2">
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
                    <TextConfig textdata={data3.data[15]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
