import { createContext } from "react";

const Context = createContext({
  isActiveNav: "",
  onClickNav: () => {},
});

export default Context