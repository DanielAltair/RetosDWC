interface UsuarioAPI {
  id: number;
  username: string;
  email: string;
  rol: "admin" | "editor" | "alumno";
  token?: string;
}

const usuarioValido: UsuarioAPI = {
  id: 1,
  username: "ana",
  email: "ana@example.com",
  rol: "admin",
  token: "abc123",
};

// Si quitas los comentarios, TypeScript marcará "invitado" como error:
// const usuarioInvalido: UsuarioAPI = {
//   id: 2,
//   username: "Luis",
//   email: "luis@example.com",
//   rol: "invitado",
// };