import { type ReactNode, useEffect } from "react";
import classes from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // Close on ESC key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close only if clicking on backdrop (not inside modal)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={classes.backdrop} onClick={handleBackdropClick}>
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
