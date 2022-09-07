import styles from './ListTodo.module.scss';
import TodoItem from '../TodoItem/TodoItem';
import { Select } from 'antd';
import { useState } from 'react';
import { Reorder } from 'framer-motion'

const { Option } = Select;
type TypeTodo = {
  id: string,
  content: string,
  status: boolean
}
type TypeListTodo = {
  list: TypeTodo[],
  setList: any
}

const ListTodo = ({ list, setList }: TypeListTodo) => {
  const [filter, setFilter] = useState('all');
  const handleChange = (value: string) => {
    setFilter(value)
  };
  return (
    <div className={styles.container}>
      <Select
        defaultValue="All"
        style={{ width: 120 }}
        onChange={handleChange}
        className={styles.select}
      >
        <Option value="all">All</Option>
        <Option value="completed">Сompleted</Option>
        <Option value="uncompleted">Uncompleted</Option>
      </Select>
      <Reorder.Group
        as='div'
        axis='y'
        values={list}
        onReorder={setList}
      >
        {list.map((todo) => {
          return (
            filter === 'all' ?
              <TodoItem
                key={todo.id}
                todoItem={todo}
                list={list}
                setList={setList}
              /> : filter === 'completed' && todo.status ?
                <TodoItem
                  key={todo.id}
                  todoItem={todo}
                  list={list}
                  setList={setList}

                /> : filter === 'uncompleted' && !todo.status ?
                  <TodoItem
                    key={todo.id}
                    todoItem={todo}
                    list={list}
                    setList={setList}

                  /> : null
          )
        })}
      </Reorder.Group>
    </div>
  );
}

export default ListTodo;