import React from "react";
import Cancel from "./Cancel";
import CreateTask from "./Create-task";

function taskForm(props) {
  return (
    <div>
      <form>
        <label>
          <input placeholder={"Name of task"} name={"Name"} />
        </label>
        <label>
          <input placeholder={"Description of task"} name={"Name"} />
        </label>
        <div>
          <CreateTask />
        </div>
        <div>
          <Cancel />
        </div>
      </form>
    </div>
  );
}

export default taskForm;
