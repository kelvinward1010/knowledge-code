import { Typography } from "antd";
import styles from "./InterviewReact.module.scss";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import { dataReact } from "../data";
import { IDataStatic } from "@/types/data";
import { takeData } from "@/utils/data";
import TextConfig from "@/components/textconfig/TextConfig";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. What is React?",
    },
    {
        key: "heading2",
        lable: "2. Các chức năng chính trong React?",
    },
    {
        key: "heading3",
        lable: "3. DOM ảo là gì, nó hoạt động như thế nào?",
    },
    {
        key: "heading4",
        lable: "4. React xử lý cập nhật (update) và kết xuất (rendering)?",
    },
    {
        key: "heading5",
        lable: "5. Giải thích khái niệm của Component trong React?",
    },
    {
        key: "heading6",
        lable: "6. Sự khác nhau giữa state và props?",
    },
    {
        key: "heading7",
        lable: "7. Redux là gì và nó hoạt động như nào với React?",
    },
    {
        key: "heading8",
        lable: "8. Khái niệm và giải thích về Higher Order Components (HOC) trong React?",
    },
];

export function InterviewReact() {
    const data1: IDataStatic = takeData("heading1", dataReact);
    const data2: IDataStatic = takeData("heading2", dataReact);
    const data3: IDataStatic = takeData("heading3", dataReact);
    const data4: IDataStatic = takeData("heading4", dataReact);
    const data5: IDataStatic = takeData("heading5", dataReact);
    const data6: IDataStatic = takeData("heading6", dataReact);
    const data7: IDataStatic = takeData("heading7", dataReact);
    const data8: IDataStatic = takeData("heading8", dataReact);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <Title level={5} id="heading1">
                        1. What is React?
                    </Title>
                    <TextConfig textdata={data1.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading2">
                        2. Các chức năng chính trong React?
                    </Title>
                    <TextConfig textdata={data2.data[0]} />
                    <br />
                    <TextConfig textdata={data2.data[1]} />
                    <br />
                    <TextConfig textdata={data2.data[2]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading3">
                        3. DOM ảo là gì, nó hoạt động như thế nào?
                    </Title>
                    <TextConfig textdata={data3.data[0]} />
                    <br />
                    <TextConfig textdata={data3.data[1]} />
                    <br />
                    <TextConfig textdata={data3.data[2]} />
                    <br />
                    <TextConfig textdata={data3.data[3]} />
                    <br />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading4">
                        4. React xử lý cập nhật (update) và kết xuất
                        (rendering)?
                    </Title>
                    <TextConfig textdata={data4.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading5">
                        5. Giải thích khái niệm của Component trong React?
                    </Title>
                    <TextConfig textdata={data5.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading6">
                        6. Sự khác nhau giữa state và props?
                    </Title>
                    <TextConfig textdata={data6.data[0]} />
                    <br />
                    <TextConfig textdata={data6.data[1]} />
                    <br />
                    <TextConfig textdata={data6.data[2]} />
                    <br />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading7">
                        7. Redux là gì và nó hoạt động như nào với React?
                    </Title>
                    <TextConfig textdata={data7.data[0]} />
                    <br />
                    <TextConfig textdata={data7.data[1]} />
                    <br />
                    <TextConfig textdata={data7.data[2]} />
                    <br />
                    <TextConfig textdata={data7.data[3]} />
                    <br />
                    <TextConfig textdata={data7.data[4]} />
                    <br />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading8">
                        8. Khái niệm và giải thích về Higher Order Components
                        (HOC) trong React?
                    </Title>
                    <TextConfig textdata={data8.data[0]} />
                    <br />
                    <TextConfig textdata={data8.data[1]} />
                    <br />
                    <TextConfig textdata={data8.data[2]} />
                    <br />
                </div>
            </div>
            <QuickLinks list={list} />
        </div>
    );
}
