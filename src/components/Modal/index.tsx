import * as React from "react";
import { createPortal } from "react-dom";
import { Backdrop, Dialog } from "./styles";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function Modal({ open, onClose, children, ariaLabel }: ModalProps) {
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <Backdrop onClick={onClose} role="presentation">
      <Dialog
        role="dialog"
        aria-label={ariaLabel}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </Dialog>
    </Backdrop>,
    document.body,
  );
}
