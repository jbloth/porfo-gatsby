import React from "react";

import styles from "./MessageSentModal.module.css";
import CloseIcon from "./icons/CloseIcon";
import Button from "./Button";

const MessageSentModal = ({ modalRef, focusRef, onCloseClick }) => {
  // Close modal when ESC is pressed
  const onKeyDown = ({ keyCode }) => {
    console.log(keyCode);
    return keyCode === 27 && onCloseClick();
  };

  // Close modal when user clicks outside (but not when click is inside modal)
  const onBackgroundClick = e => {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    onCloseClick();
  };

  return (
    <div
      className={styles.background}
      tabIndex="-1" // Takes modal out of sequential focus order
      role="presentation"
      onKeyDown={onKeyDown}
      onClick={onBackgroundClick}
    >
      <div
        className={styles.container}
        aria-modal="true"
        role="alertdialog"
        aria-label="Message was sent"
        tabIndex="-1"
        ref={modalRef} // Needed for "onBackgroundClick"
      >
        <div className={styles.iconContainer}>
          <CloseIcon
            onClick={onCloseClick}
            role="button"
            aria-label="Close Popup"
          />
        </div>
        <div className={styles.msg}>
          <p>Thanks! I'll get back to you.</p>
        </div>

        <div className={styles.buttonArea}>
          <Button
            onClick={onCloseClick}
            ref={focusRef} // Needed to focus button on load
            big
            aria-label="Close Popup"
            tabIndex="-1"
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageSentModal;
