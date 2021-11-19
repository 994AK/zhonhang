import { IRouteComponentProps } from 'umi';
import Index from '@/pages/users/index';

function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

Layout.wrappers = ['@/wrappers/auth']


export default Layout;
