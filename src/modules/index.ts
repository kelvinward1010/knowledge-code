import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const InterviewOther = lazyLoad(
    () => import("./interviews/views/InterviewOther"),
    (module) => module.InterviewOther,
);

export const InterviewReact = lazyLoad(
    () => import("./interviews/views/InterviewReact"),
    (module) => module.InterviewReact,
);

export const InterviewNodeJS = lazyLoad(
    () => import("./interviews/views/InterviewNodeJS"),
    (module) => module.InterviewNodeJS,
);

export const InterviewJavaScript = lazyLoad(
    () => import("./interviews/views/languages/InterviewJavaScript"),
    (module) => module.InterviewJavaScript,
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

export const IntroduceCiCd = lazyLoad(
    () => import("./ci-cd/views/IntroduceCiCd"),
    (module) => module.IntroduceCiCd,
);

export const DockerVsJenkins = lazyLoad(
    () => import("./ci-cd/views/DockerVsJenkins"),
    (module) => module.DockerVsJenkins,
);
