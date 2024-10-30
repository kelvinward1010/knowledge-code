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
    {
        key: "heading8",
        lable: "8. Routing (Định tuyến)",
    },
    {
        key: "heading9",
        lable: "9. Middleware",
    },
    {
        key: "heading10",
        lable: "10. Controller",
    },
    {
        key: "heading11",
        lable: "11. Model",
    },
    {
        key: "heading12",
        lable: "13. Template Engine",
    },
    {
        key: "heading13",
        lable: "14. Error Handling",
    },
];

export function InterviewNodeJS() {
    const { isBigger, isSmaller } = useFollowWidth(1024);
    const data1: IDataStatic = takeData("heading1", dataInterviewNodejs);
    const data2: IDataStatic = takeData("heading2", dataInterviewNodejs);
    const data3: IDataStatic = takeData("heading3", dataInterviewNodejs);
    const data4: IDataStatic = takeData("heading4", dataInterviewNodejs);
    const data5: IDataStatic = takeData("heading5", dataInterviewNodejs);
    const data6: IDataStatic = takeData("heading6", dataInterviewNodejs);
    const data7: IDataStatic = takeData("heading7", dataInterviewNodejs);
    const data8: IDataStatic = takeData("heading8", dataInterviewNodejs);
    const data9: IDataStatic = takeData("heading9", dataInterviewNodejs);
    const data10: IDataStatic = takeData("heading10", dataInterviewNodejs);
    const data11: IDataStatic = takeData("heading11", dataInterviewNodejs);
    const data12: IDataStatic = takeData("heading12", dataInterviewNodejs);
    const data13: IDataStatic = takeData("heading13", dataInterviewNodejs);

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
                <div className={styles.box}>
                    <Title level={5} id="heading8">
                        {list[7].lable}
                    </Title>
                    <TextConfig textdata={data8.data[0]} />
                    <TextConfig textdata={data8.data[1]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading9">
                        {list[8].lable}
                    </Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data9.data[0]}
                    />
                    <TextConfig textdata={data9.data[1]} />
                    <TextConfig textdata={data9.data[2]} />
                    <TextConfig textdata={data9.data[3]} />
                    <TextConfig textdata={data9.data[4]} />
                    <TextConfig textdata={data9.data[5]} />
                    <TextConfig textdata={data9.data[6]} />
                    <TextConfig textdata={data9.data[7]} />
                    <TextConfig textdata={data9.data[8]} />
                    <TextConfig textdata={data9.data[9]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading10">
                        {list[9].lable}
                    </Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data10.data[0]}
                    />
                    <TextConfig textdata={data10.data[1]} />
                    <TextConfig textdata={data10.data[2]} />
                    <TextConfig textdata={data10.data[3]} />
                    <TextConfig textdata={data10.data[4]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading11">
                        {list[10].lable}
                    </Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data11.data[0]}
                    />
                    <TextConfig textdata={data11.data[1]} />
                    <TextConfig textdata={data11.data[2]} />
                    <TextConfig textdata={data11.data[3]} />
                    <TextConfig textdata={data11.data[4]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading12">
                        {list[11].lable}
                    </Title>
                    <TextConfig
                        classNameText="text-title"
                        textdata={data12.data[0]}
                    />
                    <TextConfig textdata={data12.data[1]} />
                    <TextConfig textdata={data12.data[2]} />
                    <TextConfig textdata={data12.data[3]} />
                    <TextConfig textdata={data12.data[4]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading13">
                        {list[12].lable}
                    </Title>
                    <TextConfig textdata={data13.data[0]} />
                    <TextConfig textdata={data13.data[1]} />
                    <TextConfig textdata={data13.data[2]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
