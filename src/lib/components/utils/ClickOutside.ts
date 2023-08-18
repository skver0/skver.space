export function clickOutside(
  element: HTMLElement,
  functions: { onClick: () => void; callbackFunction: () => void }
) {
  function onClick(event: MouseEvent) {
    if (!element) return;
    if (element.contains(event.target as HTMLElement)) functions.onClick();

    if (!element.contains(event.target as HTMLElement)) functions.callbackFunction();
  }

  document.addEventListener("click", onClick, true);
  return {
    destroy() {
      document.removeEventListener("click", onClick, true);
    }
  };
}
