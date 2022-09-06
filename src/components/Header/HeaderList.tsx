import { Layout } from 'antd';
import CreateTodo from '../CreateTodo/CreateTodo';
import styles from './Header.module.scss';
const { Header, Content } = Layout;



function HeaderList() {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <span>Drag&Drop</span>
      </Header>
      <Content className={styles.content}>
        <CreateTodo/>
      </Content>
    </Layout>
  );
}

export default HeaderList;