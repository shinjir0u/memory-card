import "/src/styles/Dialog.css";

function Dialog({ message, onRetry }) {
  return (
    <dialog className="dialog">
      <p className="dialog__text">{message}</p>
      <button className="reset-button" onClick={onRetry} type="button">
        Retry
      </button>
    </dialog>
  );
}

export default Dialog;
