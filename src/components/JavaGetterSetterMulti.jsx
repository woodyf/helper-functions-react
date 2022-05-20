import { useMemo, useState } from "react";
import AutoSelectInput from "./AutoSelectInput";
import AutoSelectTextArea from "./AutoSelectTextArea";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.substring(1);

export default function JavaGetterSetterMulti() {
  const [sourceVar, setSourceVar] = useState("");
  const [targetVar, setTargetVar] = useState("");
  const [input, setInput] = useState("");
  const output = useMemo(() => {
    const matches = input.match(/\w+(?=;)/g) ?? [];
    return matches
      .map(
        (propName) =>
          `${targetVar}.set${capitalize(propName)}(${sourceVar}.get${capitalize(
            propName
          )}());`
      )
      .join("\n");
  }, [sourceVar, targetVar, input]);
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
      <AutoSelectTextArea
        cols={80}
        rows={5}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <hr />
      <label>output</label>{" "}
      <AutoSelectTextArea readOnly cols={80} rows={5} value={output} />
      <hr />
    </div>
  );
}
