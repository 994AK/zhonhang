import { Redirect,  } from 'umi';


export default ({children}:any) => {

  const isLongin = localStorage.getItem('token');

  if (isLongin) {
    return <div> {children}</div>;
  } else {
    return <Redirect to='/login' />;
  }
}
