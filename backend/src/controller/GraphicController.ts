import { Request, Response } from "express"
import { GraphicModel } from '../model/GraphicModel'


const getgrapharea = async (req: Request, res: Response) => {
    const cidade_Atuacao = req.query.cidade_Atuacao as string | undefined;

    try {
        if (cidade_Atuacao) {
        // Apenas entre neste bloco se cidade_Apontamento e cidade_Atuacao não forem undefined
        const data3 = await GraphicModel.graphareavsstatus(cidade_Atuacao);
        res.json(data3);
        }
    } catch (error) {
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};

const getgraphbar = async (req: Request, res: Response) => {
    const cidade = req.query.cidade as string | undefined;
    
    try {
        if(cidade) {
            const data2 = await GraphicModel.graphbarstatusvsanalista(cidade);
            res.json(data2);
        }
    } catch (error) {
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};

const getcorrecoes = async (req : Request, res : Response) => {
    const cidade_Apontamento = req.query.cidade_Apontamento as string | undefined;
    const cidade_Atuacao = req.query.cidade_Atuacao as string | undefined;

    try{
        if (cidade_Apontamento && cidade_Atuacao) {
        // Apenas entre neste bloco se cidade_Apontamento e cidade_Atuacao não forem undefined
        const data3 = await GraphicModel.correcoes(cidade_Apontamento, cidade_Atuacao);
        res.json(data3);
        }
    } catch (error){
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};

//Rotas para Editor

const editor_Graph_Area_Vs_Status = async (req: Request, res: Response) => {
    
    try {
        const cidade_Atuacao = req.query.cidade_Atuacao as string | undefined;
        const name = req.query.name as string | undefined;

        if(cidade_Atuacao && name) {
            // Apenas entre neste bloco se cidade_Apontamento e name não forem undefined
            const data = await GraphicModel.editor_Graph_Area_Vs_Status(cidade_Atuacao, name);
            res.json(data);
        }
        
    } catch (error) {
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }

}

const editor_Graph_Bar_Status_Vs_Analista = async (req: Request, res: Response) => {
    
    try {
        const cidade = req.query.cidade as string | undefined;
        const name = req.query.name as string | undefined;
        
        if(cidade && name) {
            const data = await GraphicModel.editor_Graph_Bar_Status_Vs_Analista(cidade, name);
            res.json(data);
        }
    } catch (error) {
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};

const editor_Correcoes = async (req : Request, res : Response) => {
    const cidade_Apontamento = req.query.cidade_Apontamento as string | undefined;
    const cidade_Atuacao = req.query.cidade_Atuacao as string | undefined;
    const name = req.query.name as string | undefined;

    try{

        if (cidade_Apontamento && cidade_Atuacao && name) {

        // Apenas entre neste bloco se cidade_Apontamento e cidade_Atuacao não forem undefined
        const data3 = await GraphicModel.editor_Correcoes(cidade_Apontamento, cidade_Atuacao, name);

        res.json(data3);
        }

    } catch (error){
        console.error('Erro ao obter dados do gráfico:', error);
        res.status(500).json({ message: 'Erro ao obter dados do gráfico' });
    }
};


export const graphController = {
    getgrapharea,
    getgraphbar,
    getcorrecoes,
    editor_Graph_Area_Vs_Status,
    editor_Graph_Bar_Status_Vs_Analista,
    editor_Correcoes
};





