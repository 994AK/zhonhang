import HeaderLayout from '@/layouts/Header';
import Login from '@/pages/login';
import { useEffect } from 'react';
// @ts-ignore
import { connect } from 'umi';

function Layout({ children, location, route, match, dispatch, history }: any) {

  if (location.pathname === '/login') {
    return <Login />;
  } else {

    return (
      <>
        <HeaderLayout children={children} dispatch={dispatch} history={history} />
      </>
    );
  }

}


// @ts-ignore
export default connect()(Layout);
