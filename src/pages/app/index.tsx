import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
import { Menu } from 'antd';
import { getBaseUrl, push } from 'utils/route';
import Loading from 'components/Loading';
import NormalForm from './NormalForm';
import NormalTable from './NormalTable';
import styles from 'theme/normal.module.scss';
const { SubMenu } = Menu;

const AppLayout: React.FC<{}> = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/app') {
      push('/app/table');
    }
  }, [location, history]);
  return (
    <div className={styles['app-container']}>
      <div className={styles['menu-container']}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['table']}
          onClick={(value) => {
            push('/app/' + value.key);
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
        <BrowserRouter basename={getBaseUrl() + '/app'}>
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
  );
};

export default AppLayout;
