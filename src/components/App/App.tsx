import styles from './App.module.scss';
import { Layout, Col, Row } from 'antd';
import HeaderList from '../Header/HeaderList';
import CreateTodo from '../CreateTodo/CreateTodo';
import ListTodo from '../ListTodo/ListTodo';
const { Header, Content } = Layout;

function App() {
  return (
    <div className={styles.container}>
      <Layout className={styles.wrapper}>
        <Header>
          <HeaderList />
        </Header>
        <Content className={styles.content}>
          <Row>
            <Col
              span={20}
              className={styles.createtodo}
            >
              <CreateTodo />
            </Col>
            <Col
              span={20}
              className={styles.todolist}
            >
              <ListTodo />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;