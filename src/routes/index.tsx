import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    homeUrl,
    hooksReactUrl,
    interviewsNodeJSUrl,
    interviewsReactUrl,
    introduceNodejsUrl,
    introduceReactUrl,
    layoutUrl,
    signinUrl,
} from "./urls";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";
import {
    Home,
    HooksReact,
    InterviewNodeJS,
    InterviewReact,
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
                path: homeUrl,
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
                path: interviewsReactUrl,
                element: <InterviewReact />,
            },
            {
                path: interviewsNodeJSUrl,
                element: <InterviewNodeJS />,
            },
        ],
    },
]);
