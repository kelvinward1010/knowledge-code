import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const PrettierHuskyLintStaged = lazyLoad(
    () => import("./dev-tools/views/PrettierHuskyLintStaged"),
    (module) => module.PrettierHuskyLintStaged,
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

export const InterviewJSTS = lazyLoad(
    () => import("./interviews/views/languages/InterviewJSTS"),
    (module) => module.InterviewJSTS,
);

export const InterviewHTMLCSS = lazyLoad(
    () => import("./interviews/views/InterviewHTMLCSS"),
    (module) => module.InterviewHTMLCSS,
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

export const CICDProject = lazyLoad(
    () => import("./ci-cd/views/CICDProject"),
    (module) => module.CICDProject,
);
