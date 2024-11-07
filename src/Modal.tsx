// Modal.tsx
import React, { FC, ReactNode, useEffect } from "react";
import "./Modal.css";
// import { RemoveScroll } from "react-remove-scroll";
// import { motion } from "framer-motion";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // モーダルが開いたら`body`のスクロールを無効化
      document.body.style.overflow = "hidden";
    } else {
      // モーダルが閉じたらスクロールを復元
      document.body.style.overflow = "";
    }

    // クリーンアップ処理
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    // <RemoveScroll>
    //   <motion.div
    //     variants={{
    //       initial: { opacity: 0 },
    //       animate: { opacity: 1 },
    //       exit: { opacity: 0 },
    //     }}
    //     initial="initial"
    //     animate="animate"
    //     exit="exit"
    //     transition={{ ease: "easeInOut", type: "tween", duration: 0.4 }}
    //   >
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
    //   </motion.div>
    // </RemoveScroll>
  );
};

export default Modal;
