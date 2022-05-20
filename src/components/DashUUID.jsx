import dash from "add-dashes-to-uuid";
import { useMemo, useState } from "react";
import AutoSelectInput from "./AutoSelectInput";

export default function DashUUID() {
  const [uuid, setUuid] = useState("");
  const dashedUUID = useMemo(() => dash(uuid.toUpperCase()), [uuid]);
  return (
    <div>
      <h1>DashUUID</h1>
      <label>uuid</label>{" "}
      <AutoSelectInput
        size={50}
        maxLength={32}
        value={uuid}
        onChange={(e) => setUuid(e.target.value)}
      />
      <hr />
      <label>u-u-i-d</label>{" "}
      <AutoSelectInput readOnly size={50} value={dashedUUID} /> <hr />
    </div>
  );
}
