import { memo } from "react";
import { selectAll } from "../utils";

const selectWhenClick = (Comp) => {
  const CompWithAutoSelect = (props) => <Comp {...props} onClick={selectAll} />;
  return memo(CompWithAutoSelect);
};
export default selectWhenClick;
