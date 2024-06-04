import { useNameForGraph } from "../../context/useNameForGraphContext";

export const BuscasNames: React.FC = () => {
  const { selectedNameForGraph, setSelectedNameForGraph } = useNameForGraph();

  const handleCitySelect = (event: any) => {
    const names = event.target.value;
    setSelectedNameForGraph(names);
  };

  return (
    <div className="row-1" onChange={handleCitySelect} defaultValue="">
      <select className="seletor-cidade">
        <option value="" selected disabled>
          Selecione um Contribuidor
        </option>
        <option value="Gustavo Carvalho" className="option-content">
          Gustavo Carvalho
        </option>
        <option value="Guilherme Carvalho" className="option-content">
          Guilherme Carvalho
        </option>
        <option value="Caio Azevedo" className="option-content">
          Caio Azevedo
        </option>
      </select>
    </div>
  );
};
