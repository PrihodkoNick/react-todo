import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    // const { done, important } = this.state;

    let classNames = "d-flex justify-content-between todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleted}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </span>
    );
  }
}
