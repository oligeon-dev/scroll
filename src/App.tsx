import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import { ScrollArea } from "./ScrollArea";
import { TextInput } from "./TextInput";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="container">
      <ScrollArea />
      <TextInput />
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <h2>Modal Title</h2> */}
        {/* <p>This is a simple modal component in React with TypeScript.</p> */}
        <TextInput />
        <ScrollArea />
      </Modal>
    </div>
  );
}

export default App;
