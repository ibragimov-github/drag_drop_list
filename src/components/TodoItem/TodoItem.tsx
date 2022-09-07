import styles from './TodoItem.module.scss';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Button, Popconfirm, Typography } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { Reorder } from 'framer-motion';

const { Text } = Typography;

type TypeTodo = {
  id: string,
  content: string,
  status: boolean
}
type TypeListTodo = {
  list: TypeTodo[],
  setList: any,
  todoItem: TypeTodo
}

const TodoItem = ({ list, setList, todoItem }: TypeListTodo) => {
  const { id, content, status } = todoItem;
  const handleChange = (value: boolean) => {
    setList(list.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          status: !status
        }
      }
      return todo;
    }))
  }
  const confirm = () => {
    setList(list.filter((todo) => {
      if(todo.id !== id) {
        return todo;
      }
      return null
    }))
  };
  return (
    <Reorder.Item
      className={styles.container}
      value={todoItem}
    >
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
    </Reorder.Item>
  );
}

export default TodoItem;