const INITIAL_STATE = {
  selectedid: null,
  users: [
    {
      id: 1,
      firstName: "Frank Vyas",
      email: "frankvyas@gmail.com",
      status: "InActive",
      isActive: true,
      image: "https://reqres.in/img/faces/1-image.jpg",
      clicksreviewed: "2200",
      monthlyclicked: "4200",
    },
    {
      id: 2,
      firstName: "Frank Vyas",
      email: "frankvyas@gmail.com",
      status: "InActive",
      isActive: false,
      image: "https://reqres.in/img/faces/2-image.jpg",
      clicksreviewed: "3200",
      monthlyclicked: "5200",
    },
    {
      id: 3,
      firstName: "Gina Geller",
      email: "ginageller@gmail.com",
      status: "InActive",
      isActive: false,
      image: "https://reqres.in/img/faces/3-image.jpg",
      clicksreviewed: "4200",
      monthlyclicked: "6200",
    },
    {
      id: 4,
      firstName: "Jessi Tanna",
      email: "jessitanna@gmail.com",
      status: "InActive",
      isActive: false,
      image: "https://reqres.in/img/faces/4-image.jpg",
      clicksreviewed: "5200",
      monthlyclicked: "7200",
    },
    {
      id: 5,
      firstName: "Jay Sheth",
      email: "jaysheth@gmail.com",
      status: "InActive",
      isActive: false,
      image: "https://reqres.in/img/faces/5-image.jpg",
      clicksreviewed: "6200",
      monthlyclicked: "8200",
    },
    {
      id: 6,
      firstName: "Tracey Ramos",
      email: "tracey.ramos@reqres.in",
      status: "InActive",
      isActive: false,
      image: "https://reqres.in/img/faces/6-image.jpg",
      clicksreviewed: "6200",
      monthlyclicked: "8200",
    },
  ],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "onMouseEnter":
      return { ...state, selectedid: action.payload };
    case "onMouseLeave":
      return { ...state, selectedid: action.payload };

    default:
      return state;
  }
}
