import { useReducer } from "react";
import UsersList from "./UsersList";
import AddUser from "./AddUser";
import usersReducer, { usersList } from "./usersReducer";

function App() {
  const [users, dispatch] = useReducer(usersReducer, usersList);

  return (
    <main>
      <h1>Elenco utenti</h1>
      <AddUser onAddUser={(newUser) => dispatch({ type: "ADD", newUser })} />
      <UsersList
        users={users}
        onDeleteUser={(idUser) => dispatch({ type: "DEL", idUser })}
        onModifyUser={(idUser, newName) =>
          dispatch({ type: "MOD", idUser, newName })
        }
      />
    </main>
  );
}

export default App;
