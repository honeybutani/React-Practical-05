export const ProfileHover = (id) => {
  return {
    type: "onMouseEnter",
    payload: id,
  };
};

export const ProfileHoverLeave = () => {
  return {
    type: "onMouseLeave",
    payload: null,
  };
};
