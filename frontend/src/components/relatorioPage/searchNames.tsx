import { useNameForGraph } from "../../context/useNameForGraphContext";

import { useAllUsers } from "../../context/getAllUsers";

export const BuscasNames: React.FC = () => {
  const { selectedNameForGraph, setSelectedNameForGraph } = useNameForGraph();

  const userId = localStorage.getItem("@Auth:userId") || "";

  const users = useAllUsers(userId);
  console.log(users);

  const handleCitySelect = (event: any) => {
    const names = event.target.value;
    setSelectedNameForGraph(names);
  };

  return (
    <div className="row-1-graficos" defaultValue="">
      <select
        className="seletor-cidade"
        onChange={handleCitySelect}
        defaultValue=""
      >
        <option value="" disabled>
          Selecione um Contribuidor
        </option>
        {users.map((user, index) => (
          <option key={index} onClick={() => handleCitySelect(user)}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};