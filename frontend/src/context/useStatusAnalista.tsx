import { useEffect, useState } from "react";
import { api } from "../api/api";
import { DataItem2 } from "../interfaces/graphInterface";


const useGraphStatusAnalista = () => {
    const [dados, setDados] = useState<Array<[string, string | number, string | number]>>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get('/graph-bar');
                const data: DataItem2[] = response.data;

                const chartData: Array<[string, number, number]> = data.map((item: any) => [
                    item.analista,
                    item.andamento !== null ? parseFloat(item.andamento) : 0.0,
                    parseFloat(item.finalizado)
                ]);

                setDados([['analista', 'andamento', 'finalizado'], ...chartData]);
            } catch (error) {
                setError(error as Error);
            }
        };

        getData();
    }, []);

    return { dados, error };
};

export default useGraphStatusAnalista;
