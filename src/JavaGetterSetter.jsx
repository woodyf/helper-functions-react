import { useState } from "react";

export default function JavaGetterSetter() {
  const [uuid, setUuid] = useState("");
  return (
    <div>
      <h1>DashUUID</h1>
      <label>uuid</label>{" "}
      <input value={uuid} onChange={(e) => setUuid(e.target.value)} />
      <hr />
      <label>u-u-i-d</label> <input value={uuid} />
      <hr />
    </div>
  );
}
