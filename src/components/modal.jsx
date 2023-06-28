import { useCallback, useEffect, useRef } from "react";
import "./modal.css";

export default function Modal({ open, onClose, children, ...props }) {
  const modalRef = useRef(null);

  var modalClass;
  if (!open) {
    modalClass = "modal modal--closing";
  } else {
    modalClass = "modal";
  }
  // Eventlistener: trigger onclose when cancel detected
  const onCancel = useCallback(
    (e) => {
      e.preventDefault();
      onClose();
      console.log("oncacels");
    },
    [onClose]
  );

  // Eventlistener: trigger onclose when click outside
  const onClick = useCallback(
    ({ target }) => {
      const { current: el } = modalRef;
      if (target === el) onClose();
    },
    [onClose]
  );

  // when open changes run open/close command
  useEffect(() => {
    const { current: el } = modalRef;
    if (open) el.showModal();
    else {
      el.close();
    }
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      className={modalClass}
      onClose={onClose}
      onCancel={onCancel}
      onClick={onClick}
    >
      <div className={"modal__container"}>{children}</div>
    </dialog>
  );
}
