import { useState } from "react";
import dash from "add-dashes-to-uuid";

export default function DashUUID() {
  const [uuid, setUuid] = useState("");
  return (
    <div>
      <h1>DashUUID</h1>
      <label>uuid</label>{" "}
      <input value={uuid} onChange={(e) => setUuid(e.target.value)} />
      <hr />
      <label>u-u-i-d</label> <input value={dash(uuid)} />
      <hr />
    </div>
  );
}
