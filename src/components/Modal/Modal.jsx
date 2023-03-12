import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { OverlayStyled, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
let scrollPosition = 0;

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    disableScroll();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableScroll();
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({ top: scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  };

  const disableScroll = () => {
    scrollPosition = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: -${scrollPosition}px;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px
      `;
    document.documentElement.style.scrollBehavior = 'unset';
  };

  return createPortal(
    <OverlayStyled onClick={handleBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};
