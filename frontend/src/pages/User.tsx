export function User() {
  const name = localStorage.getItem("@Auth:name");

  return <h1>Ola {name}</h1>;
}
