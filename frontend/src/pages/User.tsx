export function User() {
  const name = localStorage.getItem("@Auth:name");
  const role = localStorage.getItem("@Auth:role")?.toLocaleUpperCase();

  return (
    <h1>
      Seja bem-vindo {role} {name}
    </h1>
  );
}
