const INITIAL_STATE = {
  selectedid: null,
  users: [{ "id": 1, "firstName": "Frank Vyas","email":   "honeybutani@gmail.com","status": "InActive", "role": "User", "image":"https://reqres.in/img/faces/1-image.jpg" },
  { "id": 2, "firstName": "Vic jhon","email":     "honeybutani@yahoo.com", "status":"InActive", "role": "Admi", "image":"https://reqres.in/img/faces/2-image.jpg"},
  { "id": 3, "firstName": "Gina Geller","email":  "honeybutani@gmail.com","status": "InActive", "role": "Admi", "image":"https://reqres.in/img/faces/3-image.jpg" },
  { "id": 4, "firstName": "Jessi Tanna", "email": "honeybutani@gmail.com","status": "InActive", "role": "User", "image":"https://reqres.in/img/faces/4-image.jpg"},
  { "id": 5, "firstName": "Jay Sheth","email":    "honeybutani@gmail.com","status": "InActive", "role": "User" , "image":"https://reqres.in/img/faces/5-image.jpg" }],
}


export default function reducer(state = INITIAL_STATE, action) {
  console.log(state);
  switch(action.type) {
    case 'onMouseEnter':
        return { ...state, selectedid: action.payload };
    default:
      return state;
  }
}