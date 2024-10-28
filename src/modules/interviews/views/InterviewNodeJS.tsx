import { Typography } from "antd";
import styles from "./style.module.scss";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";
import { IDataStatic } from "@/types/data";
import { takeData } from "@/utils/data";
import { dataInterviewNodejs } from "../data";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { CorsExplain } from "@/assets/images/interviews";

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
    {
        key: "heading4",
        lable: "4. Express.js là gì?",
    },
    {
        key: "heading5",
        lable: "5. Quản lý Database",
    },
    {
        key: "heading6",
        lable: "6. CORS trong Node.js: Giải thích chi tiết",
    },
    {
        key: "heading7",
        lable: "7. Xác thực và Ủy quyền trong Ứng dụng Full-stack JavaScript",
    },
];

export function InterviewNodeJS() {
    const { isBigger, isSmaller } = useFollowWidth(768);
    const data1: IDataStatic = takeData("heading1", dataInterviewNodejs);
    const data2: IDataStatic = takeData("heading2", dataInterviewNodejs);
    const data3: IDataStatic = takeData("heading3", dataInterviewNodejs);
    const data4: IDataStatic = takeData("heading4", dataInterviewNodejs);
    const data5: IDataStatic = takeData("heading5", dataInterviewNodejs);
    const data6: IDataStatic = takeData("heading6", dataInterviewNodejs);
    const data7: IDataStatic = takeData("heading7", dataInterviewNodejs);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
                <div className={styles.box}>
                    <Title level={5} id="heading1">
                        {list[0].lable}
                    </Title>
                    <TextConfig textdata={data1.data[0]} />
                    <TextConfig textdata={data1.data[1]} />
                    <TextConfig textdata={data1.data[2]} />
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
                        {list[2].lable}
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
                <div className={styles.box}>
                    <Title level={5} id="heading4">
                        {list[3].lable}
                    </Title>
                    <TextConfig textdata={data4.data[0]} />
                    <TextConfig textdata={data4.data[1]} />
                    <TextConfig textdata={data4.data[2]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading5">
                        {list[4].lable}
                    </Title>
                    <TextConfig textdata={data5.data[0]} />
                    <TextConfig textdata={data5.data[1]} />
                    <TextConfig textdata={data5.data[2]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading6">
                        {list[5].lable}
                    </Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data6.data[0]}
                    />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data6.data[1]}
                    />
                    <TextConfig textdata={data6.data[2]} />
                    <TextConfig textdata={data6.data[3]} />
                    <TextConfig textdata={data6.data[4]} />
                    <TextConfig textdata={data6.data[5]} />
                    <TextConfig textdata={data6.data[6]} />
                    <TextConfig textdata={data6.data[7]} />
                    <TextConfig textdata={data6.data[8]} />
                    <img src={CorsExplain} alt="" />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading7">
                        {list[6].lable}
                    </Title>
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
                    <TextConfig textdata={data7.data[8]} />
                    <TextConfig textdata={data7.data[9]} />
                    <TextConfig textdata={data7.data[10]} />
                    <TextConfig textdata={data7.data[11]} />
                    <TextConfig textdata={data7.data[12]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
