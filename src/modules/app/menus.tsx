import {
    RemixReactUrl,
    cicdUrl,
    cicdprojectUrl,
    devtoolsUrl,
    hooksReactUrl,
    interviewsHTMLCSSUrl,
    interviewsJSTSUrl,
    interviewsNodeJSUrl,
    interviewsOtherUrl,
    interviewsReactUrl,
    interviewsUrl,
    introduceCicdUrl,
    introduceNodejsUrl,
    introduceReactUrl,
    layoutUrl,
    nodejsUrl,
    prettierhuskylintstagedUrl,
    reactUrl,
} from "@/routes/urls";
import {
    IconBrandNodejs,
    IconBrandReact,
    IconGenderIntergender,
    IconHomeFilled,
    IconRocket,
    IconTool,
} from "@tabler/icons-react";

export const defaultMenus = [
    {
        path: layoutUrl,
        name: "Home",
        icon: <IconHomeFilled size={17} />,
    },
    {
        path: devtoolsUrl,
        name: "Dev Tools",
        icon: <IconTool size={17} />,
        routes: [
            {
                path: prettierhuskylintstagedUrl,
                name: "Prettier-Husky-LintStaged",
            },
        ],
    },
    {
        path: interviewsUrl,
        name: "Interviews",
        icon: <IconGenderIntergender size={17} />,
        routes: [
            {
                path: interviewsHTMLCSSUrl,
                name: "HTML/CSS",
            },
            {
                path: interviewsReactUrl,
                name: "React",
            },
            {
                path: interviewsNodeJSUrl,
                name: "NodeJS",
            },
            {
                name: "Languages",
                routes: [
                    {
                        path: interviewsJSTSUrl,
                        name: "JS/TS",
                    },
                ],
            },
            {
                path: interviewsOtherUrl,
                name: "Other",
            },
        ],
    },
    {
        path: reactUrl,
        name: "React",
        icon: <IconBrandReact size={17} />,
        routes: [
            {
                path: introduceReactUrl,
                name: "Introduce React",
            },
            {
                path: hooksReactUrl,
                name: "Hooks React",
            },
            {
                path: RemixReactUrl,
                name: "Remix React",
            },
        ],
    },
    {
        path: nodejsUrl,
        name: "NodeJS",
        icon: <IconBrandNodejs size={17} />,
        routes: [
            {
                path: introduceNodejsUrl,
                name: "Introduce NodeJS",
            },
        ],
    },
    {
        path: cicdUrl,
        name: "CI/CD",
        icon: <IconRocket size={17} />,
        routes: [
            {
                path: introduceCicdUrl,
                name: "Introduce CI/CD",
            },
            {
                path: cicdprojectUrl,
                name: "CI/CD Project",
            },
        ],
    },
];
