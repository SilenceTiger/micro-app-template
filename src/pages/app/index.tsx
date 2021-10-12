import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useLocation, useHistory, Redirect } from 'react-router-dom';
import { Menu } from 'antd';
import Loading from 'components/Loading';
import NormalForm from './NormalForm';
import NormalTable from './NormalTable';
import styles from 'theme/normal.module.scss';
const { SubMenu } = Menu;

const AppLayout: React.FC<{}> = () => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.pathname === '/app') {
      history.push('/app/table');
    }
  }, [location, history]);
  return (
    <div className={styles['app-container']}>
      <div className={styles['menu-container']}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['table']}
          onClick={(value) => {
            history.push('/app/' + value.key);
            // (window as any).history.pushState(null, '', '/app/' + value.key);
          }}>
          <Menu.Item key="table">普通表格</Menu.Item>
          <Menu.Item key="form">普通表单</Menu.Item>

          <SubMenu key="example" title="二级菜单">
            <Menu.Item key="line">Option 1</Menu.Item>
            <Menu.Item key="bar">Option 2</Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      <div className={styles['content-container']}>
        <div>
          <BrowserRouter basename="/app">
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/table" />} />
                <Route path="/table" render={() => <NormalTable />} />
                <Route path="/form" render={() => <NormalForm />} />
              </Switch>
            </React.Suspense>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
