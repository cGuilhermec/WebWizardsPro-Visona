import { useEffect, useState } from "react";
import { api } from "../api/api";
import { ChartItem, DataItem } from "../interfaces/graphInterface";

const useGraphCorrecoes = () => {
    const [dados, setDados] = useState<Array<[string, string | number]>>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get('/graph-correcao');
                const data: DataItem[] = response.data;

                const chartData: Array<[string, number]> = data.map((item: any) => {

                    return [
                        item.correcao || 'Desconhecido',
                        parseInt(item.total_correcoes, 10),];
                });
                setDados([['Correção', 'Total Correções',], ...chartData]);
            } catch (error) {
                setError(error as Error);
            }
        };

        getData();
    }, []);

    return { dados, error };
};

export default useGraphCorrecoes;
