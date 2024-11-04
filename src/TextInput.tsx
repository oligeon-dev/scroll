import { useEffect, useRef } from "react";

export function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 初回レンダー時にinput要素にフォーカスを当てる
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return <input type="text" ref={inputRef} />;
}
