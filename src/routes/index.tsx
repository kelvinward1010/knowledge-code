import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    cicdprojectUrl,
    hooksReactUrl,
    interviewsHTMLCSSUrl,
    interviewsJSTSUrl,
    interviewsNodeJSUrl,
    interviewsOtherUrl,
    interviewsReactUrl,
    introduceCicdUrl,
    introduceNodejsUrl,
    introduceReactUrl,
    layoutUrl,
    prettierhuskylintstagedUrl,
    RemixReactUrl,
    signinUrl,
} from "./urls";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";
import {
    CICDProject,
    Home,
    HooksReact,
    InterviewHTMLCSS,
    InterviewJSTS,
    InterviewNodeJS,
    InterviewOther,
    InterviewReact,
    IntroduceCiCd,
    IntroduceNodejs,
    IntroduceReact,
    Layout,
    PrettierHuskyLintStaged,
    RemixReact,
} from "@/modules";

interface RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
    const user = true;
    return user ? <>{children}</> : <Navigate to={signinUrl} replace />;
};

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        errorElement: (
            <ProtectedRoute>
                <Layout>
                    <ErrorBoundaryPage />
                </Layout>
            </ProtectedRoute>
        ),
        children: [
            {
                path: layoutUrl,
                element: <Home />,
            },
            {
                path: prettierhuskylintstagedUrl,
                element: <PrettierHuskyLintStaged />,
            },
            {
                path: introduceReactUrl,
                element: <IntroduceReact />,
            },
            {
                path: RemixReactUrl,
                element: <RemixReact />,
            },
            {
                path: hooksReactUrl,
                element: <HooksReact />,
            },
            {
                path: introduceNodejsUrl,
                element: <IntroduceNodejs />,
            },
            {
                path: interviewsOtherUrl,
                element: <InterviewOther />,
            },
            {
                path: interviewsReactUrl,
                element: <InterviewReact />,
            },
            {
                path: interviewsNodeJSUrl,
                element: <InterviewNodeJS />,
            },
            {
                path: interviewsJSTSUrl,
                element: <InterviewJSTS />,
            },
            {
                path: interviewsHTMLCSSUrl,
                element: <InterviewHTMLCSS />,
            },
            {
                path: introduceCicdUrl,
                element: <IntroduceCiCd />,
            },
            {
                path: cicdprojectUrl,
                element: <CICDProject />,
            },
        ],
    },
]);
