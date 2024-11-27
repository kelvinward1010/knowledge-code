import { Typography } from "antd";
import styles from "./style.module.scss";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { dataReactRemix } from "../data";
import { takeData } from "@/utils/data";
import { IDataStatic } from "@/types/data";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import TextConfig from "@/components/textconfig/TextConfig";

const { Title } = Typography;

const list = [
    {
        key: "heading1",
        lable: "1. Giới thiệu về React Remix",
    },
];

export function RemixReact() {
    const { isBigger, isSmaller } = useFollowWidth(1024);
    const data1: IDataStatic = takeData("heading1", dataReactRemix);

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
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[1]}
                    />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[2]}
                    />
                    <TextConfig textdata={data1.data[3]} />
                    <TextConfig textdata={data1.data[4]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[5]}
                    />
                    <TextConfig textdata={data1.data[6]} />
                    <TextConfig textdata={data1.data[7]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[8]}
                    />
                    <TextConfig textdata={data1.data[9]} />
                    <TextConfig textdata={data1.data[10]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[11]}
                    />
                    <TextConfig textdata={data1.data[12]} />
                    <TextConfig textdata={data1.data[13]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[14]}
                    />
                    <TextConfig textdata={data1.data[15]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[16]}
                    />
                    <TextConfig textdata={data1.data[17]} />
                    <TextConfig
                        classNameText="text-title"
                        textdata={data1.data[18]}
                    />
                    <TextConfig textdata={data1.data[19]} />
                    <TextConfig textdata={data1.data[20]} />
                    <TextConfig textdata={data1.data[21]} />
                    <TextConfig textdata={data1.data[22]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
