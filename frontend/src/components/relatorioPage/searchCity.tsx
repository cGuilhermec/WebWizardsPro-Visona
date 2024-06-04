import { useCity } from "../../context/useCityContext";

export const BuscasCity: React.FC = () => {
  const { setSelectedCity } = useCity();

  const handleCitySelect = (event: any) => {
    const city = event.target.value;
    setSelectedCity(city);
  };

  return (
    <div className="row-1" onChange={handleCitySelect} defaultValue="">
      <select className="seletor-cidade">
        <option value="" selected disabled>
          Selecione uma Cidade
        </option>
        <option value="Atibaia" className="option-content">
          Atibaia
        </option>
        <option value="Cruzeiro" className="option-content">
          Cruzeiro
        </option>
        <option value="Taubaté" className="option-content">
          Taubaté
        </option>
      </select>
    </div>
  );
};
