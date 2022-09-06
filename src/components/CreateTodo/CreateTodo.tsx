import styles from './CreateTodo.module.scss';
import { Button, Input } from 'antd';
function CreateTodo() {
  return (
    <div className={styles.container}>
      <h4>Create a new todo</h4>
      <div className={styles['add-menu']}>
        <Input.Group compact>
          <Input
            placeholder='What needs to be done'
          />
          <Button type="primary">Submit</Button>
        </Input.Group>
      </div>
    </div>
  );
}

export default CreateTodo;