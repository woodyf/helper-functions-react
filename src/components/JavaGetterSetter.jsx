import { useMemo, useState } from "react";
import AutoSelectInput from "./AutoSelectInput";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.substring(1);

export default function JavaGetterSetter() {
  const [sourceVar, setSourceVar] = useState("");
  const [targetVar, setTargetVar] = useState("");
  const [propName, setPropName] = useState("");
  const line = useMemo(() => {
    return `${targetVar}.set${capitalize(
      propName
    )}(${sourceVar}.get${capitalize(propName)}());`;
  }, [sourceVar, targetVar, propName]);
  return (
    <div>
      <h1>JavaGetterSetter</h1>
      <label>target variable (set to)</label>{" "}
      <AutoSelectInput
        value={targetVar}
        onChange={(e) => setTargetVar(e.target.value)}
      />
      <br />
      <label>source variable (get from)</label>{" "}
      <AutoSelectInput
        value={sourceVar}
        onChange={(e) => setSourceVar(e.target.value)}
      />
      <br />
      <label>property</label>{" "}
      <AutoSelectInput
        value={propName}
        onChange={(e) => setPropName(e.target.value)}
      />
      <hr />
      <label>line</label> <AutoSelectInput readOnly size={100} value={line} />
      <hr />
    </div>
  );
}
