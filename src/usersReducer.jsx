export default function usersReducer(state, action) {
  if (action.type === "ADD") {
    return [...state, action.newUser];
  } else if (action.type === "DEL") {
    return state.filter((user) => user.id !== action.idUser);
  } else if (action.type === "MOD") {
    return state.map((user) =>
      user.id === action.idUser ? { ...user, nome: action.newName } : user
    );
  } else {
    console.log("Operazione di aggiornamento non riconosciuta");
    return state;
  }
}

export const usersList = [
  { id: 1, nome: " Andrea Rossi", email: "andrea@gmail.it" },
  { id: 2, nome: " Angelica Bianchi", email: "angelica@email.it" },
  { id: 3, nome: " Mario Verdi", email: "mario@email.it" },
];
