import React, { useContext } from "react";
import { Context } from "../Context";
import { Container, Input, Text, Button } from "./Login";

export default function AddForm() {
  const { newValue, addSession, setNewValue } = useContext(Context);

  return (
    <Container>
      <Text>Add Session</Text>
      <Input
        type="number"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <Button onClick={addSession}>Add</Button>
    </Container>
  );
}
