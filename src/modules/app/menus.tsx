import {
    homeUrl,
    hooksReactUrl,
    introduceNodejsUrl,
    introduceReactUrl,
    nodejsUrl,
    reactUrl,
} from "@/routes/urls";
import {
    IconBrandNodejs,
    IconBrandReact,
    IconHomeFilled,
} from "@tabler/icons-react";

export const defaultMenus = [
    {
        path: homeUrl,
        name: "Home",
        icon: <IconHomeFilled size={17} />,
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
];
