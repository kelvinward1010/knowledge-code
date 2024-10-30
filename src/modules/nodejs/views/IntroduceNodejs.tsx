import { Typography } from "antd";
import styles from "./Nodejs.module.scss";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { takeData } from "@/utils/data";
import { dataNodeJS } from "../data";
import { IDataStatic } from "@/types/data";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. Cơ bản về NodeJS.",
    },
];

export function IntroduceNodejs() {
    const { isBigger, isSmaller } = useFollowWidth(1024);
    const data1: IDataStatic = takeData("heading1", dataNodeJS);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
                <div className={styles.box}>
                    <Title level={5} id="heading1">
                        {list[0].lable}
                    </Title>
                    <TextConfig textdata={data1.data[0]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[1]}
                    />
                    <TextConfig textdata={data1.data[2]} />
                    <TextConfig textdata={data1.data[3]} />
                    <TextConfig textdata={data1.data[4]} />
                    <TextConfig textdata={data1.data[5]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[6]}
                    />
                    <TextConfig textdata={data1.data[7]} />
                    <TextConfig textdata={data1.data[8]} />
                    <TextConfig textdata={data1.data[9]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
