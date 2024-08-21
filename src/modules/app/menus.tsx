import {
    cicdUrl,
    cicdprojectUrl,
    hooksReactUrl,
    interviewsJavaScriptUrl,
    interviewsNodeJSUrl,
    interviewsOtherUrl,
    interviewsReactUrl,
    interviewsUrl,
    introduceCicdUrl,
    introduceNodejsUrl,
    introduceReactUrl,
    layoutUrl,
    nodejsUrl,
    reactUrl,
} from "@/routes/urls";
import {
    IconBrandNodejs,
    IconBrandReact,
    IconGenderIntergender,
    IconHomeFilled,
    IconRocket,
} from "@tabler/icons-react";

export const defaultMenus = [
    {
        path: layoutUrl,
        name: "Home",
        icon: <IconHomeFilled size={17} />,
    },
    {
        path: interviewsUrl,
        name: "Interviews",
        icon: <IconGenderIntergender size={17} />,
        routes: [
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
                        path: interviewsJavaScriptUrl,
                        name: "JavaScript",
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
