import { useState } from "react";

import "./App.css";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [text, setText] = useState("");

  const debounce = useDebounce(setText, 1000);

  return (
    <div id="app">
      <input
        type="text"
        name="text-input"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          debounce(event.target.value)
        }
      />
      <pre id="live-text-display">{text}</pre>
      {text.length > 0 && <p>Note: Text will appear 1 seconds after input.</p>}
    </div>
  );
}
