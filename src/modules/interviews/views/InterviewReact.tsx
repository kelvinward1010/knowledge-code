import { Typography } from "antd";
import styles from "./InterviewReact.module.scss";
import { QuickLinks } from "@/components/quicklinks/QuickLinks";
import { dataReact } from "../data";
import { IDataStatic } from "@/types/data";
import { takeData } from "@/utils/data";
import TextConfig from "@/components/textconfig/TextConfig";
import { useFollowWidth } from "@/hooks/useFollowWidth";

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
    {
        key: "heading9",
        lable: "9. React Hooks là gì và chúng hoạt động như thế nào?",
    },
    {
        key: "heading10",
        lable: "10. Có những cách nào để styling trong React?",
    },
    {
        key: "heading11",
        lable: "11. Hook useEffect trong React hoạt động như nào?",
    },
    {
        key: "heading12",
        lable: "12. React xử lý định tuyến như thế nào và một số thư viện định tuyến phổ biến cho React?",
    },
    {
        key: "heading13",
        lable: "13. Giải quyết bất đồng bộ trong React như nào?",
    },
    {
        key: "heading14",
        lable: "14. React xử lý việc test (thử nghiệm) như thế nào và một số khuôn khổ thử nghiệm phổ biến cho React?",
    },
    {
        key: "heading15",
        lable: "15. Lifecycle của component trong React?",
    },
    {
        key: "heading16",
        lable: "16. Sự khác biệt giữa kết xuất phía máy chủ (SSR) và kết xuất phía máy (CSR) khác trong React là gì?",
    },
    {
        key: "heading17",
        lable: "17. Khi nào nên dùng SSR, CSR, SSG?",
    },
    {
        key: "heading18",
        lable: "18. Bạn hiểu Refs trong React là gì, trường hợp nào sử dụng?",
    },
    {
        key: "heading19",
        lable: "19. Làm sao để ngăn các component re-render?",
    },
    {
        key: "heading20",
        lable: "20. Key là gì khi hiển thị một danh sách và mục tiêu của nó là gì?",
    },
];

export function InterviewReact() {
    const { isBigger, isSmaller } = useFollowWidth(768);

    const data1: IDataStatic = takeData("heading1", dataReact);
    const data2: IDataStatic = takeData("heading2", dataReact);
    const data3: IDataStatic = takeData("heading3", dataReact);
    const data4: IDataStatic = takeData("heading4", dataReact);
    const data5: IDataStatic = takeData("heading5", dataReact);
    const data6: IDataStatic = takeData("heading6", dataReact);
    const data7: IDataStatic = takeData("heading7", dataReact);
    const data8: IDataStatic = takeData("heading8", dataReact);
    const data9: IDataStatic = takeData("heading9", dataReact);
    const data10: IDataStatic = takeData("heading10", dataReact);
    const data11: IDataStatic = takeData("heading11", dataReact);
    const data12: IDataStatic = takeData("heading12", dataReact);
    const data13: IDataStatic = takeData("heading13", dataReact);
    const data14: IDataStatic = takeData("heading14", dataReact);
    const data15: IDataStatic = takeData("heading15", dataReact);
    const data16: IDataStatic = takeData("heading16", dataReact);
    const data17: IDataStatic = takeData("heading17", dataReact);
    const data18: IDataStatic = takeData("heading18", dataReact);
    const data19: IDataStatic = takeData("heading19", dataReact);
    const data20: IDataStatic = takeData("heading20", dataReact);

    return (
        <div className={styles.container}>
            {isSmaller && <QuickLinks list={list} />}
            <div className={styles.content}>
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
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading3">
                        {list[2].lable}
                    </Title>
                    <TextConfig textdata={data3.data[0]} />
                    <TextConfig textdata={data3.data[1]} />
                    <TextConfig textdata={data3.data[2]} />
                    <TextConfig textdata={data3.data[3]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading4">
                        {list[3].lable}
                    </Title>
                    <TextConfig textdata={data4.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading5">
                        {list[4].lable}
                    </Title>
                    <TextConfig textdata={data5.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading6">
                        {list[5].lable}
                    </Title>
                    <TextConfig textdata={data6.data[0]} />
                    <TextConfig textdata={data6.data[1]} />
                    <TextConfig textdata={data6.data[2]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading7">
                        {list[6].lable}
                    </Title>
                    <TextConfig textdata={data7.data[0]} />
                    <TextConfig textdata={data7.data[1]} />
                    <TextConfig textdata={data7.data[2]} />
                    <TextConfig textdata={data7.data[3]} />
                    <TextConfig textdata={data7.data[4]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading8">
                        {list[7].lable}
                    </Title>
                    <TextConfig textdata={data8.data[0]} />
                    <TextConfig textdata={data8.data[1]} />
                    <TextConfig textdata={data8.data[2]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading9">
                        {list[8].lable}
                    </Title>
                    <TextConfig textdata={data9.data[0]} />
                    <TextConfig textdata={data9.data[1]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading10">
                        {list[9].lable}
                    </Title>
                    <TextConfig textdata={data10.data[0]} />
                    <TextConfig textdata={data10.data[1]} />
                    <TextConfig textdata={data10.data[2]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading11">
                        {list[10].lable}
                    </Title>
                    <TextConfig textdata={data11.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading12">
                        {list[11].lable}
                    </Title>
                    <TextConfig textdata={data12.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading13">
                        {list[12].lable}
                    </Title>
                    <TextConfig textdata={data13.data[0]} />
                    <TextConfig textdata={data13.data[1]} />
                    <TextConfig textdata={data13.data[2]} />
                    <TextConfig textdata={data13.data[3]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading14">
                        {list[13].lable}
                    </Title>
                    <TextConfig textdata={data14.data[0]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading15">
                        {list[14].lable}
                    </Title>
                    <TextConfig textdata={data15.data[0]} />
                    <TextConfig textdata={data15.data[1]} />
                    <TextConfig textdata={data15.data[2]} />
                    <TextConfig textdata={data15.data[3]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading16">
                        {list[15].lable}
                    </Title>
                    <TextConfig textdata={data16.data[0]} />
                    <TextConfig textdata={data16.data[1]} />
                    <TextConfig textdata={data16.data[2]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading17">
                        {list[16].lable}
                    </Title>
                    <TextConfig textdata={data17.data[0]} />
                    <TextConfig textdata={data17.data[1]} />
                    <TextConfig textdata={data17.data[2]} />
                    <TextConfig textdata={data17.data[3]} />
                    <TextConfig textdata={data17.data[4]} />
                    <TextConfig textdata={data17.data[5]} />
                    <TextConfig textdata={data17.data[6]} />
                    <TextConfig textdata={data17.data[7]} />
                    <TextConfig textdata={data17.data[8]} />
                    <TextConfig textdata={data17.data[9]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading18">
                        {list[17].lable}
                    </Title>
                    <TextConfig textdata={data18.data[0]} />
                    <TextConfig textdata={data18.data[1]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading19">
                        {list[18].lable}
                    </Title>
                    <TextConfig textdata={data19.data[0]} />
                    <TextConfig textdata={data19.data[1]} />
                </div>
                <div className={styles.box}>
                    <Title level={5} id="heading20">
                        {list[19].lable}
                    </Title>
                    <TextConfig textdata={data20.data[0]} />
                    <TextConfig textdata={data20.data[1]} />
                </div>
            </div>
            {isBigger && <QuickLinks list={list} />}
        </div>
    );
}
