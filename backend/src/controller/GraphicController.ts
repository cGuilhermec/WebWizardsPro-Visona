import { Request, Response } from "express"
import { GraphicModel } from '../model/GraphicModel'


const getgrapharea = async (req: Request, res: Response) => {
    try {
        const data = await GraphicModel.graphareavsstatus();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};

const getgraphbar = async (req: Request, res: Response) => {
    try {
        const data2 = await GraphicModel.graphbarstatusvsanalista();
        res.json(data2);
    } catch (error) {
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};

const getcorrecoes = async (req : Request, res : Response) => {
    try{
        const data3 = await GraphicModel.correcoes();
        res.json(data3);
    } catch (error){
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};

export const graphpizza = {
    getgrapharea,
    getgraphbar,
    getcorrecoes
};





