import { Typography } from "antd";
import styles from "./style.module.scss";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { dataReactIntroduce } from "../data";
import { takeData } from "@/utils/data";
import { IDataStatic } from "@/types/data";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. Giới thiệu về React",
    },
    {
        key: "heading2",
        lable: "2. Các khái niệm cơ bản",
    },
    {
        key: "heading3",
        lable: "3. Lợi ích của React",
    },
    {
        key: "heading4",
        lable: "4. Các khái niệm nâng cao",
    },
];

export function IntroduceReact() {
    const { isBigger, isSmaller } = useFollowWidth(1024);
    const data1: IDataStatic = takeData("heading1", dataReactIntroduce);
    const data2: IDataStatic = takeData("heading2", dataReactIntroduce);
    const data3: IDataStatic = takeData("heading3", dataReactIntroduce);
    const data4: IDataStatic = takeData("heading4", dataReactIntroduce);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
                <Title level={5}>
                    React là một thư viện JavaScript phổ biến được phát triển
                    bởi Facebook để xây dựng giao diện người dùng (UI). Dưới đây
                    là một cái nhìn chi tiết về React:
                </Title>
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
                    <TextConfig textdata={data2.data[2]} />
                    <TextConfig textdata={data2.data[3]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading3">
                        {list[2].lable}
                    </Title>
                    <TextConfig textdata={data3.data[0]} />
                    <TextConfig textdata={data3.data[1]} />
                    <TextConfig textdata={data3.data[2]} />
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
