import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

export default function useModal(initialIsOpen) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const open = () => {
    setIsOpen((prevStateIsOpen) => {
      if (prevStateIsOpen) { // If modal is already opened, close first then open it again
        setTimeout(() => {
          setIsOpen(true);
        }, 200);
        return false;
      }
      return true;
    });
  };

  const close = () => setIsOpen(false);

  const props = {
    isOpen,
    onRequestClose: close,
  };

  return {
    open,
    close,
    props,
  };
}

export function Modal({
  children, onAfterClose, onRequestClose, style = {}, ...props
}) {
  const DEFAULT_MODAL_PROPS = {
    contentLabel: 'App Modal',
    closeTimeoutMS: 150,
  };
  const DEFAULT_MODAL_STYLE = {
    overlay: {
      background: 'rgba(0,0,0,.6)',
    },
    content: {
      top: 80,
      bottom: 'unset',
      margin: 'auto',
      width: '100%',
      maxWidth: 420,
    },
  };

  return (
    <ReactModal
      {...DEFAULT_MODAL_PROPS}
      onAfterClose={onAfterClose}
      onRequestClose={onRequestClose}
      {...props}
      style={{ ...DEFAULT_MODAL_STYLE, ...style }}
    >
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onAfterClose: PropTypes.func,
  onRequestClose: PropTypes.func,
  style: PropTypes.object,
};
