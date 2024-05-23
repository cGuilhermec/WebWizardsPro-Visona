import { useEffect, useState } from "react";
import { api } from "../api/api";
import { ChartItem, DataItem } from "../interfaces/graphInterface";

const useGraphData = () => {
    const [dados, setDados] = useState<Array<[string, string | number]>>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get('/graph-area');
                const data: DataItem[] = response.data;
                const chartData: Array<[string, number]> = data.map((item: any) => [
                    item.status || 'Desconhecido',
                    parseFloat(item.total_km2),
                ]);
                setDados([['Status', 'total_km2'], ...chartData]);
            } catch (error) {
                setError(error as Error);
            }
        };

        getData();
    }, []);

    return { dados, error };
};

export default useGraphData;
