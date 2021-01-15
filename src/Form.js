import React, { useState, useContext } from "react";

import { Context } from "./Context";

export default function Form() {
  const { newPushupsSession, addSession, setNewPushupsSession } = useContext(
    Context
  );

  return (
    <div>
      <input
        type="number"
        value={newPushupsSession}
        onChange={(e) => setNewPushupsSession(parseInt(e.target.value))}
      />
      <button onClick={() => addSession()}>Add</button>
    </div>
  );
}
