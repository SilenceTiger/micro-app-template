export const inQianKun = () => !!(window as any).__POWERED_BY_QIANKUN__;

export const getBaseUrl = () => (inQianKun() ? '/main/app-react/' : '/');
