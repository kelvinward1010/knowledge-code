import { Typography } from "antd";
import styles from "../style.module.scss";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";
import { IDataStatic } from "@/types/data";
import { dataInterviewJSTS } from "../../data";
import { takeData } from "@/utils/data";
import {
    ClosureExplain,
    Comparebindcallapply,
} from "@/assets/images/interviews";

const { Title } = Typography;

const list: { key: string; lable: string }[] = [
    {
        key: "heading1",
        lable: "1. Phân biệt let, const, var?",
    },
    {
        key: "heading2",
        lable: "2. Bất đồng bộ là gì? Các cách xử lý bất đồng bộ trong JS(TS)",
    },
    {
        key: "heading3",
        lable: "3. ES5 (ECMAScript 5) và ES6 (ECMAScript 6)",
    },
    {
        key: "heading4",
        lable: "4. Event loop trong JavaScript hoạt động như thế nào?",
    },
    {
        key: "heading5",
        lable: "5. This là gì?",
    },
    {
        key: "heading6",
        lable: "6. So sánh bind, call, apply?",
    },
    {
        key: "heading7",
        lable: "7. Prototype trong JavaScript là gì?",
    },
    {
        key: "heading8",
        lable: "8. Closure trong JavaScript là gì?",
    },
];

export function InterviewJSTS() {
    const { isBigger, isSmaller } = useFollowWidth(768);
    const data1: IDataStatic = takeData("heading1", dataInterviewJSTS);
    const data2: IDataStatic = takeData("heading2", dataInterviewJSTS);
    const data3: IDataStatic = takeData("heading3", dataInterviewJSTS);
    const data4: IDataStatic = takeData("heading4", dataInterviewJSTS);
    const data5: IDataStatic = takeData("heading5", dataInterviewJSTS);
    const data6: IDataStatic = takeData("heading6", dataInterviewJSTS);
    const data7: IDataStatic = takeData("heading7", dataInterviewJSTS);
    const data8: IDataStatic = takeData("heading8", dataInterviewJSTS);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
                <div className={styles.box}>
                    <Title level={5} id="heading1">
                        {list[0].lable}
                    </Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[0]}
                    />
                    <TextConfig textdata={data1.data[1]} />
                    <TextConfig textdata={data1.data[2]} />
                    <TextConfig textdata={data1.data[3]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[4]}
                    />
                    <TextConfig textdata={data1.data[5]} />
                    <TextConfig textdata={data1.data[6]} />
                    <TextConfig textdata={data1.data[7]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[8]}
                    />
                    <TextConfig textdata={data1.data[9]} />
                    <TextConfig textdata={data1.data[10]} />
                    <TextConfig textdata={data1.data[11]} />
                </div>
                <div className={styles.box} id="heading2">
                    <Title level={5}>{list[1].lable}</Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data2.data[0]}
                    />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data2.data[1]}
                    />
                    <TextConfig textdata={data2.data[2]} />
                    <TextConfig textdata={data2.data[3]} />
                    <TextConfig textdata={data2.data[4]} />
                    <TextConfig textdata={data2.data[5]} />
                    <TextConfig textdata={data2.data[6]} />
                    <TextConfig textdata={data2.data[7]} />
                    <TextConfig textdata={data2.data[8]} />
                    <TextConfig textdata={data2.data[9]} />
                    <TextConfig textdata={data2.data[10]} />
                </div>
                <div className={styles.box} id="heading3">
                    <Title level={5}>{list[2].lable}</Title>
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
                    <TextConfig textdata={data4.data[5]} />
                    <TextConfig textdata={data4.data[6]} />
                    <TextConfig textdata={data4.data[7]} />
                    <TextConfig textdata={data4.data[8]} />
                    <TextConfig textdata={data4.data[9]} />
                    <TextConfig textdata={data4.data[10]} />
                    <TextConfig textdata={data4.data[11]} />
                    <TextConfig textdata={data4.data[12]} />
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
                </div>
                <div className={styles.box} id="heading6">
                    <Title level={5}>{list[5].lable}</Title>
                    <TextConfig textdata={data6.data[0]} />
                    <TextConfig textdata={data6.data[1]} />
                    <img src={Comparebindcallapply} alt="" />
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
                    <TextConfig textdata={data7.data[4]} />
                    <TextConfig textdata={data7.data[5]} />
                    <TextConfig textdata={data7.data[6]} />
                    <TextConfig textdata={data7.data[7]} />
                </div>
                <div className={styles.box} id="heading8">
                    <Title level={5}>{list[7].lable}</Title>
                    <TextConfig textdata={data8.data[0]} />
                    <img src={ClosureExplain} alt="" />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
