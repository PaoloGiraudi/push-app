import React, { useContext } from "react";
import { Context } from "../Context";
import { Container, Input, Text, Button } from "./Login";

export default function AddForm() {
  const { newPushupsSession, addSession, setNewPushupsSession } = useContext(
    Context
  );

  return (
    <Container>
      <Text>Add Session</Text>
      <Input
        type="number"
        value={newPushupsSession}
        onChange={(e) => setNewPushupsSession(e.target.value)}
      />
      <Button onClick={() => addSession()}>Add</Button>
    </Container>
  );
}
