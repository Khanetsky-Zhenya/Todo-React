import React from "react";

import { Form } from "../Form";
import styles from "./TodoList.module.css";
export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  onClickAdd = (todoshka) => {
    const newTodos = [...this.state.todos, todoshka];

    this.setState({ todos: newTodos });
  };
  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => {
      if (todo.id === id && todo.checked) {
        return false;
      }
      return true;
    });
    this.setState({ todos: newTodos });
  };
  deleteAll = () => {
    this.setState({ todos: [] });
  };
  doneAll = () => {
    const newTodos = this.state.todos.map((todo) => {
      todo.checked = true;
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <Form onClick={this.onClickAdd} />
        <div className={styles.button_top}>
          <button className={styles.deleteAll} onClick={this.deleteAll}>
            Delete All
          </button>
          <button className={styles.doneAll} onClick={this.doneAll}>
            Done All
          </button>
          <div>
            <button className={styles.todoCounter}>
              Todo open:{" "}
              {this.state.todos.length ? this.state.todos.length : "0"}
            </button>
          </div>
        </div>
        {this.state.todos.map((item) => {
          return (
            <div>
              <div className={styles.todoAll} key={item.id}>
                <p
                  className={styles.todo}
                  style={{
                    width: "250px",
                    height: "25px",
                    padding: "5px",
                    marginBottom: "10px",
                    textAlign: "left",
                    backgroundColor: item.checked
                      ? "rgb(160, 238, 166)"
                      : "rgb(238, 160, 164)",
                  }}
                >
                  {item.text}
                </p>
                <button
                  className={styles.buttonToggle}
                  onClick={() => this.toggleTodo(item.id)}
                >
                  Done
                </button>
                <p
                  className={styles.buttonDelete}
                  onClick={() => this.deleteTodo(item.id)}
                >
                  &#10006;
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
