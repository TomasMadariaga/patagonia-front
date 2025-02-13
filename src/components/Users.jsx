import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

export const Users = () => {
  const { findUsers, updateUser, deleteUser } = useUser();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editUser) {
      try {
        const {resetPasswordToken, ...rest} = editUser 
        await updateUser(editUser.id, rest);
        setEditUser(null);
      } catch (error) {
        console.log(error)
        throw new Error(error);
      }
    }
  };

  const handleDelete = async (id) => {
    const response = await deleteUser(id);
    setDeleted(!deleted);
    return response;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersFounded = await findUsers();
        setUsers(usersFounded.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchUsers();
  }, [editUser, deleted]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar"
        className="mb-4 p-2 w-full border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>

      {editUser ? (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-bold mb-4">Editar Usuario</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 w-full border rounded"
                value={editUser.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium mb-2"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="p-2 w-full border rounded"
                value={editUser.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 w-full border rounded"
                value={editUser.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 w-full border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Rol
              </label>
              <select
                type="text"
                id="role"
                name="role"
                className="p-2 w-full border rounded"
                value={editUser.role}
                onChange={handleChange}
              >
                <option value={"Admin"}>Admin</option>
                <option value={"Cliente"}>Cliente</option>
                <option value={"Pintor"}>Pintor</option>
                <option value={"Albañil"}>Albañil</option>
                <option value={"Singuero"}>Singuero</option>
                <option value={"Herrero"}>Herrero</option>
                <option value={"Carpintero"}>Carpintero</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Guardar cambios
            </button>
            <button
              type="button"
              className="ml-4 p-2 border rounded bg-red-500 text-white"
              onClick={() => setEditUser(null)}
            >
              Cancelar
            </button>
          </form>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-md block max-h-[500px] overflow-y-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Apellido</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Rol</th>
                <th className="border px-4 py-2">Calificación</th>
                <th className="border px-4 py-2">Total Votos</th>
                <th className="border px-4 py-2">Foto de Perfil</th>
                <th className="border px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.lastname}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">{user.rating}</td>
                  <td className="border px-4 py-2">{user.totalVotes}</td>
                  <td className="border px-4 py-2">
                    {user.profilePicture ? (
                      <img
                        src={`http://localhost:3000/uploads/pfp/${user.profilePicture}`}
                        alt="Perfil"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      "Sin foto"
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="text-blue-500 pr-5"
                      onClick={() => setEditUser(user)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-blue-500"
                      onClick={() => handleDelete(user.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
