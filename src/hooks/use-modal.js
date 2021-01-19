import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function useModal(initialIsOpen) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const defaultStyle = {
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

  function Component({
    children, onAfterClose, onRequestClose, style = {}, ...props
  }) {
    return (
      <Modal
        isOpen={isOpen}
        onAfterClose={onAfterClose}
        onRequestClose={onRequestClose ?? close}
        contentLabel="App Modal"
        closeTimeoutMS={150}
        style={{ ...defaultStyle, ...style }}
        {...props}
      >
        {children}
      </Modal>
    );
  }

  Component.propTypes = {
    children: PropTypes.node,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    style: PropTypes.object,
  };

  return {
    open,
    close,
    isOpen,
    Component,
  };
}
