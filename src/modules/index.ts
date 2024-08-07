import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const InterviewReact = lazyLoad(
    () => import("./interviews/views/InterviewReact"),
    (module) => module.InterviewReact,
);

export const IntroduceReact = lazyLoad(
    () => import("./react/views/IntroduceReact"),
    (module) => module.IntroduceReact,
);

export const HooksReact = lazyLoad(
    () => import("./react/views/HooksReact"),
    (module) => module.HooksReact,
);

export const IntroduceNodejs = lazyLoad(
    () => import("./nodejs/views/IntroduceNodejs"),
    (module) => module.IntroduceNodejs,
);
