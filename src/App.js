import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import TotalCompleteItems from "./Components/TotalCompleteItems";

const App = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container py-4">
        <h1 className="text-center text-primary mb-4">My Todo List</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <AddTodoForm />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <TodoList />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <TotalCompleteItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
