import { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal: FunctionComponent = ({ children }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current);

    // eslint-disable-next-line consistent-return
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(children, elRef.current);
};

export default Modal;
