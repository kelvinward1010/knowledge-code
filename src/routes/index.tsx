import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    dockervsjenkinsUrl,
    hooksReactUrl,
    interviewsNodeJSUrl,
    interviewsOtherUrl,
    interviewsReactUrl,
    introduceCicdUrl,
    introduceNodejsUrl,
    introduceReactUrl,
    layoutUrl,
    signinUrl,
} from "./urls";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";
import {
    DockerVsJenkins,
    Home,
    HooksReact,
    InterviewNodeJS,
    InterviewOther,
    InterviewReact,
    IntroduceCiCd,
    IntroduceNodejs,
    IntroduceReact,
    Layout,
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
                path: introduceReactUrl,
                element: <IntroduceReact />,
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
                path: introduceCicdUrl,
                element: <IntroduceCiCd />,
            },
            {
                path: dockervsjenkinsUrl,
                element: <DockerVsJenkins />,
            },
        ],
    },
]);
