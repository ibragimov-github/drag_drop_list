import styles from './TodoItem.module.scss';
import todo from '../../store/ToDo';
import { observer } from 'mobx-react-lite';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Button, Popconfirm, Typography } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
const { Text } = Typography;

type TypeTodo = {
  todoItem: {
    id: string,
    content: string,
    status: boolean
  }
}

const TodoItem = observer(({ todoItem }: TypeTodo) => {
  const {id, content, status} = todoItem;
  const handleChange = (value: boolean) => {
    todo.completeTodo(id)
  }
  const confirm = () => {
    todo.removeTodo(id)
  };
  return (
    <div className={styles.container}>
      <Text
        className={styles.content}
        delete={status}
      >{content}</Text>
      <div className={styles.control}>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          onChange={handleChange}
          checked={status}
        />
        <Popconfirm
          placement='topRight'
          title='Are you sure you want to delete?'
          onConfirm={confirm}
        >
          <Button
            icon={<DeleteFilled />}
            danger
          />
        </Popconfirm>

      </div>
    </div>
  );
})

export default TodoItem;