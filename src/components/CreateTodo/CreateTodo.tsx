import { useState, KeyboardEvent } from 'react'
import styles from './CreateTodo.module.scss';
import { Button, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
type TypeTodo = {
  id: string,
  content: string,
  status: boolean
}
type TypeListTodo = {
  list: TypeTodo[],
  setList: any
}
const CreateTodo = ({list, setList}: TypeListTodo) => {
  const [input, setInput] = useState('')
  const createTodo = () => {
    setList([{
      id: String(Date.now()),
      content: input,
      status: false
    } ,...list])
    setInput('');
  }
  const createTodoKeyboard = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') createTodo();
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}><h4>Create a new todo</h4></div>
      <div className={styles['add-menu']}>
        <Input.Group
          className={styles.input}
          compact>
          <Input
            size='large'
            style={{ width: 'calc(100% - 85.17px)' }}
            placeholder='What needs to be done?'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={createTodoKeyboard}
          />
          <Button
            icon={<PlusCircleOutlined />}
            type='primary'
            size='large'
            onClick={createTodo}
          >Add</Button>
        </Input.Group>
      </div>
    </div>
  );
}

export default CreateTodo;