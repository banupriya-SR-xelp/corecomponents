export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const CENTER_MODULE_DEMO = "centerModalDemo";
export function showModal(type, ownProps) {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  return {
    type: SHOW_MODAL,
    modalType: type,
    scrollPosition: scrollPosition,
    ownProps
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    modalType: null
  };
}
