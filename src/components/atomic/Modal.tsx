import { FormEvent, ReactNode } from 'react';

type ModalType = {
  id: string;
  title: string;
  content: string | ReactNode;
  onSubmit?: (e: FormEvent) => void;
};

function Modal({ id, title, content, onSubmit }: ModalType) {
  return (
    <dialog id={id} className="modal">
      <form id="modal_form" method="dialog" className="modal-box" onSubmit={onSubmit}>
        <button className="btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{content}</p>
        <button type="submit" className="btn-sm btn-wide btn-primary">
          Submit
        </button>
      </form>
    </dialog>
  );
}

export default Modal;
