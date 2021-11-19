import styles from './index.less';
import { history } from 'umi';

export default function IndexPage() {

  history.push('/users');

  return (
    <div>
      等待中....
    </div>
  );
}

