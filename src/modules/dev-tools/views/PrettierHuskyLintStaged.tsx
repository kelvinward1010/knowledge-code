import { Typography } from "antd";
import styles from "./style.module.scss";
import TextConfig from "@/components/textconfig/TextConfig";

const { Title } = Typography;

export function PrettierHuskyLintStaged() {
    return (
        <div className={styles.container}>
            <Title level={5}>
                Auto format code with husky, pertier, lint before up to Git
            </Title>
            <Title level={5}>Command install:</Title>
            <TextConfig textdata={"1. npm i husky -D"} />
            <TextConfig textdata={"2. npx husky init"} />
            <TextConfig textdata={"3. npx husky install"} />
            <TextConfig
                textdata={
                    "4. npm i -D eslint-config-prettier prettier eslint-plugin-react lint-staged"
                }
            />
            <br />
            <Title level={5}>
                All files need to setup:&nbsp;
                <a
                    href={"https://github.com/kelvinward1010/kw-blogs"}
                    target={"_blank"}
                >
                    Github
                </a>
            </Title>
            <TextConfig textdata={"1. pre-commit"} />
            <TextConfig textdata={"2. eslint.config.js"} />
            <TextConfig textdata={"3. .eslintrc.mjs"} />
            <TextConfig textdata={"4. .prettierrc.json"} />
            <TextConfig textdata={"5. .prettierignore"} />
            <TextConfig textdata={"6. package.json"} />
        </div>
    );
}
