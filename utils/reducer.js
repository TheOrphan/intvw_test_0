export default function reducer(state, action) {
  switch (action.type) {
    case "register":
      return {
        username: action.username,
        password: action.password,
        name: action.name,
        isRegistered: true,
      };
    default:
      throw new Error();
  }
}
