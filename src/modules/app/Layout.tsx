import { Logo } from "@/assets/images";
import {
    DefaultFooter,
    PageContainer,
    ProLayout,
    type MenuDataItem,
    type ProLayoutProps,
} from "@ant-design/pro-layout";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { defaultMenus } from "./menus";
import styles from "./Layout.module.scss";
import "./index.css";
import {
    FacebookFilled,
    GithubFilled,
    GithubOutlined,
    LinkedinFilled,
    LogoutOutlined,
} from "@ant-design/icons";
import { Dropdown, Input } from "antd";
import ButtonToTop from "@/components/buttontotop/ButtonToTop";

export type LayoutProps = {
    children?: React.ReactNode;
} & ProLayoutProps;

export const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props;
    const navigate = useNavigate();

    const loopMenuItem = (menus: any[]): MenuDataItem[] =>
        menus.map(({ icon, routes, ...item }) => ({
            ...item,
            icon: icon,
            children: routes && loopMenuItem(routes),
        }));

    const defaultFooterDom = (
        <DefaultFooter
            copyright={`${new Date().getFullYear()} Kelvin Ward | Tyler Locke`}
            links={[
                {
                    key: "Ant Design Pro",
                    title: "Ant Design Pro",
                    href: "https://pro.ant.design",
                    blankTarget: true,
                },
                {
                    key: "github",
                    title: <GithubOutlined />,
                    href: "https://github.com/ant-design/ant-design-pro",
                    blankTarget: true,
                },
                {
                    key: "Ant Design",
                    title: "Ant Design",
                    href: "https://ant.design",
                    blankTarget: true,
                },
            ]}
        />
    );

    const FormHeader = () => {
        return (
            <div className={styles.containerHeader}>
                <Input.Search className={styles.search} />
            </div>
        );
    };

    return (
        <ProLayout
            className={styles.containerLayout}
            logo={Logo}
            {...props}
            title="Knowledge"
            layout={"mix"}
            menuItemRender={(menuItemProps, defaultDom) => {
                if (
                    !menuItemProps.path ||
                    location.pathname === menuItemProps.path
                ) {
                    return defaultDom;
                }
                return (
                    <a onClick={() => navigate(menuItemProps.path as string)}>
                        {defaultDom}
                    </a>
                );
            }}
            menu={{
                request: async () => loopMenuItem(defaultMenus),
            }}
            avatarProps={{
                src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
                size: "small",
                title: "KW|TL",
                render: (_, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: "logout",
                                        icon: <LogoutOutlined />,
                                        label: "Sign out",
                                    },
                                ],
                            }}
                        >
                            {dom}
                        </Dropdown>
                    );
                },
            }}
            actionsRender={(props) => {
                if (props.isMobile) return [];
                if (typeof window === "undefined") return [];
                return [
                    <a
                        className={styles.link}
                        href="www.linkedin.com/in/dao-van-duy-29a10928b"
                        target="_blank"
                    >
                        <LinkedinFilled key="InfoCircleFilled" />
                    </a>,
                    <a
                        className={styles.link}
                        href="https://www.facebook.com/duy.kelvinward"
                        target="_blank"
                    >
                        <FacebookFilled key="QuestionCircleFilled" />
                    </a>,
                    <a
                        className={styles.link}
                        href="https://github.com/kelvinward1010"
                        target="_blank"
                    >
                        <GithubFilled key="GithubFilled" />
                    </a>,
                ];
            }}
            breadcrumbRender={(routers = []) => [
                {
                    path: "/",
                },
                ...routers,
            ]}
            itemRender={(route, __, routes, paths) => {
                const first = routes.indexOf(route) === 0;
                return first ? (
                    <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
                ) : (
                    <span>{route.breadcrumbName}</span>
                );
            }}
            headerContentRender={FormHeader}
            footerRender={() => defaultFooterDom}
        >
            <PageContainer>
                <div>
                    <Outlet />
                    <ButtonToTop />
                </div>
                {children}
            </PageContainer>
        </ProLayout>
    );
};
