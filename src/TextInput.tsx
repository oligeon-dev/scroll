import { useEffect, useRef } from "react";
import "./TextInput.css";

export function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 3000);

    // クリーンアップ関数を返して、コンポーネントがアンマウントされるときにタイマーをクリア
    return () => clearTimeout(timer);
  }, []);
  return <input type="text" ref={inputRef} className="input" />;
}
