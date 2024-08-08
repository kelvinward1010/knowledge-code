import { Typography } from "antd";
import "./TextConfig.css";

const { Text } = Typography;

interface TextConfigProps {
    classNameText?: string;
    textdata: any;
}

function TextConfig({ classNameText, textdata }: TextConfigProps) {
    return (
        <Text className={`${classNameText} textfix`}>
            &emsp;&nbsp;{textdata}
        </Text>
    );
}

export default TextConfig;
