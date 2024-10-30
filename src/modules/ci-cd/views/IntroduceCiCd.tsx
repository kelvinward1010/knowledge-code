import { Typography } from "antd";
import styles from "./style.module.scss";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import { dataintroduceCICD } from "../config";
import { takeData } from "@/utils/data";
import { IDataStatic } from "@/types/data";
import TextConfig from "@/components/textconfig/TextConfig";
import { useFollowWidth } from "@/hooks/useFollowWidth";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. CI/CD là gì?",
    },
    {
        key: "heading2",
        lable: "2. Cách thức hoạt động của CI/CD",
    },
    {
        key: "heading3",
        lable: "3. Ưu điểm và nhược điểm của CI/CD",
    },
    {
        key: "heading4",
        lable: "4. Khi nào nên áp dụng quy trình CI/CD",
    },
];

export function IntroduceCiCd() {
    const { isBigger, isSmaller } = useFollowWidth(1024);
    const data1: IDataStatic = takeData("heading1", dataintroduceCICD);
    const data2: IDataStatic = takeData("heading2", dataintroduceCICD);
    const data3: IDataStatic = takeData("heading3", dataintroduceCICD);
    const data4: IDataStatic = takeData("heading4", dataintroduceCICD);

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
                    <TextConfig textdata={data1.data[3]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading2">
                        {list[1].lable}
                    </Title>
                    <TextConfig textdata={data2.data[0]} />
                    <TextConfig textdata={data2.data[1]} />
                    <TextConfig textdata={data2.data[2]} />
                    <TextConfig textdata={data2.data[3]} />
                    <TextConfig textdata={data2.data[4]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading3">
                        {list[2].lable}
                    </Title>
                    <TextConfig textdata={data3.data[0]} />
                    <TextConfig textdata={data3.data[1]} />
                    <TextConfig textdata={data3.data[2]} />
                    <TextConfig textdata={data3.data[3]} />
                    <TextConfig textdata={data3.data[4]} />
                    <TextConfig textdata={data3.data[5]} />
                    <TextConfig textdata={data3.data[6]} />
                    <TextConfig textdata={data3.data[7]} />
                    <TextConfig textdata={data3.data[8]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading4">
                        {list[3].lable}
                    </Title>
                    <TextConfig textdata={data4.data[0]} />
                    <TextConfig textdata={data4.data[1]} />
                    <TextConfig textdata={data4.data[2]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
