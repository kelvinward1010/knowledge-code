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
        lable: "1. HTML là gì? CSS là gì?",
    },
    {
        key: "heading2",
        lable: "2. Cấu trúc cơ bản của một trang HTML?",
    },
    {
        key: "heading3",
        lable: "3. Các selector trong CSS?",
    },
    {
        key: "heading4",
        lable: "4. CSS Box Model",
    },
    {
        key: "heading5",
        lable: "5. Flexbox và Grid layout",
    },
    {
        key: "heading6",
        lable: "6. HTML Semantic Elements là gì?",
    },
    {
        key: "heading7",
        lable: "7. Phân biệt inline, block và inline-block?",
    },
    {
        key: "heading8",
        lable: "8. Vị trí (position) trong CSS:",
    },
];

export function InterviewHTMLCSS() {
    const { isBigger, isSmaller } = useFollowWidth(1024);
    const data1: IDataStatic = takeData("heading1", dataInterviewHTMLCSS);
    const data2: IDataStatic = takeData("heading2", dataInterviewHTMLCSS);
    const data3: IDataStatic = takeData("heading3", dataInterviewHTMLCSS);
    const data4: IDataStatic = takeData("heading4", dataInterviewHTMLCSS);
    const data5: IDataStatic = takeData("heading5", dataInterviewHTMLCSS);
    const data6: IDataStatic = takeData("heading6", dataInterviewHTMLCSS);
    const data7: IDataStatic = takeData("heading7", dataInterviewHTMLCSS);
    const data8: IDataStatic = takeData("heading8", dataInterviewHTMLCSS);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
                <div className={styles.box} id="heading1">
                    <Title level={5}>{list[0].lable}</Title>
                    <TextConfig textdata={data1.data[0]} />
                    <TextConfig textdata={data1.data[1]} />
                </div>
                <div className={styles.box} id="heading2">
                    <Title level={5}>{list[1].lable}</Title>
                    <TextConfig textdata={data2.data[0]} />
                    <TextConfig textdata={data2.data[1]} />
                    <TextConfig textdata={data2.data[2]} />
                </div>
                <div className={styles.box} id="heading3">
                    <Title level={5}>{list[2].lable}</Title>
                    <TextConfig textdata={data3.data[0]} />
                    <TextConfig textdata={data3.data[1]} />
                    <TextConfig textdata={data3.data[2]} />
                    <TextConfig textdata={data3.data[3]} />
                </div>
                <div className={styles.box} id="heading4">
                    <Title level={5}>{list[3].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data4.data[0]}
                    />
                    <TextConfig textdata={data4.data[1]} />
                    <TextConfig textdata={data4.data[2]} />
                    <TextConfig textdata={data4.data[3]} />
                    <TextConfig textdata={data4.data[4]} />
                </div>
                <div className={styles.box} id="heading5">
                    <Title level={5}>{list[4].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data5.data[0]}
                    />
                    <TextConfig textdata={data5.data[1]} />
                    <TextConfig textdata={data5.data[2]} />
                    <TextConfig textdata={data5.data[3]} />
                    <TextConfig textdata={data5.data[4]} />
                    <TextConfig textdata={data5.data[5]} />
                    <TextConfig textdata={data5.data[6]} />
                    <TextConfig textdata={data5.data[7]} />
                    <TextConfig textdata={data5.data[8]} />
                    <TextConfig textdata={data5.data[9]} />
                    <TextConfig textdata={data5.data[10]} />
                    <TextConfig textdata={data5.data[11]} />
                    <TextConfig textdata={data5.data[12]} />
                    <TextConfig textdata={data5.data[13]} />
                    <TextConfig textdata={data5.data[14]} />
                    <TextConfig textdata={data5.data[15]} />
                    <TextConfig textdata={data5.data[16]} />
                </div>
                <div className={styles.box} id="heading6">
                    <Title level={5}>{list[5].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data6.data[0]}
                    />
                    <TextConfig textdata={data6.data[1]} />
                    <TextConfig textdata={data6.data[2]} />
                    <TextConfig textdata={data6.data[3]} />
                    <TextConfig textdata={data6.data[4]} />
                    <TextConfig textdata={data6.data[5]} />
                    <TextConfig textdata={data6.data[6]} />
                    <TextConfig textdata={data6.data[7]} />
                    <TextConfig textdata={data6.data[8]} />
                    <TextConfig textdata={data6.data[9]} />
                    <TextConfig textdata={data6.data[10]} />
                    <TextConfig textdata={data6.data[11]} />
                    <TextConfig textdata={data6.data[12]} />
                    <TextConfig textdata={data6.data[13]} />
                    <TextConfig textdata={data6.data[14]} />
                </div>
                <div className={styles.box} id="heading7">
                    <Title level={5}>{list[6].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data7.data[0]}
                    />
                    <TextConfig textdata={data7.data[1]} />
                    <TextConfig textdata={data7.data[2]} />
                    <TextConfig textdata={data7.data[3]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data7.data[4]}
                    />
                    <TextConfig textdata={data7.data[5]} />
                    <TextConfig textdata={data7.data[6]} />
                    <TextConfig textdata={data7.data[7]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data7.data[8]}
                    />
                    <TextConfig textdata={data7.data[9]} />
                    <TextConfig textdata={data7.data[10]} />
                    <TextConfig textdata={data7.data[11]} />
                </div>
                <div className={styles.box} id="heading8">
                    <Title level={5}>{list[7].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data8.data[0]}
                    />
                    <TextConfig textdata={data8.data[1]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data8.data[2]}
                    />
                    <TextConfig textdata={data8.data[3]} />
                    <TextConfig textdata={data8.data[4]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data8.data[5]}
                    />
                    <TextConfig textdata={data8.data[6]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data8.data[7]}
                    />
                    <TextConfig textdata={data7.data[1]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
