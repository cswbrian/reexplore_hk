import AsyncComponent from "../components/AsyncComponent";

//routes
export const routes = {
    home: '/home',
    account_summary: '/account',
    dummy: '/dummy',
    register: '/register',
    login: '/login'
};


export const pages = {
    Home: AsyncComponent(() => import('../pages/Home')),
    AccountSummary: AsyncComponent(() => import('../pages/AccountSummary')),
    Dummy: AsyncComponent(() => import('../pages/Dummy')),
    Register: AsyncComponent(() => import('../pages/Register')),
    Login: AsyncComponent(() => import('../pages/Login'))

};

const generateRouteList = auth => {
    let routerList = [
        { path: routes.home, component: pages.Home },
        { path: routes.account_summary, component: pages.AccountSummary },
        { path: routes.dummy, component: pages.Dummy},
        { path: routes.register, component: pages.Register},
        { path: routes.login, component: pages.Login},

    ];
    if( !auth ) {
        routerList = routerList.concat([
        ]);
    }

    return routerList ;
};

export default generateRouteList;