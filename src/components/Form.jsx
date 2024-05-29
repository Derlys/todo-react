import React from "react";

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
      </form>
    </div>
  );
}

export default taskForm;
