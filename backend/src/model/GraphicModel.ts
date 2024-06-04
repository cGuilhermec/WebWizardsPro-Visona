import { Client } from "pg";
import { createConection } from "../../database/connection"


const graphareavsstatus = async (cidadeAtuacao: string) => {
  const client = await createConection();
  const graphareavsstatus = await client.query(

    `select ROUND(CAST(SUM(area_km2) AS numeric),2) as total_km2, status from ${cidadeAtuacao} GROUP BY status;`

  );
  return graphareavsstatus.rows;
}

const graphbarstatusvsanalista = async (cidade: string) => {
  const client = await createConection();
  const graphbarstatusvsanalista = await client.query(

    `SELECT atribuicao AS Analista,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade} 
     WHERE status = 'andamento' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS andamento,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade} 
     WHERE status = 'finalizado' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS finalizado
FROM ${cidade} t
GROUP BY atribuicao

EXCEPT

SELECT atribuicao AS Analista,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade} 
     WHERE status = 'andamento' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS andamento,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade} 
     WHERE status = 'finalizado' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS finalizado
FROM ${cidade} t
WHERE status IS NULL
GROUP BY atribuicao;`

  )
  return graphbarstatusvsanalista.rows;
}

const correcoes = async (cidadeApontamento: string, cidadeAtuacao: string) => {
  const client = await createConection();
  const correcoes = await client.query(
    `SELECT a.correcao AS correcao, COUNT(a.correcao) AS total_correcoes 
	FROM ${cidadeApontamento} AS a INNER
JOIN ${cidadeAtuacao} AS b ON ST_Intersects(a.geom, b.geom) 
GROUP BY 
    a.correcao;`

  )
  return correcoes.rows;
}

//Rotas para Editor

const editor_Graph_Area_Vs_Status = async (cidade: string, name: string) => {

  const client = await createConection();

  const editor_Graph_Area_Vs_Status = await client.query(

    `select ROUND(CAST(SUM(area_km2) AS numeric),2) as total_km2, status from ${cidade} WHERE atribuicao = $1 GROUP BY status;`, [name]
  );

  return editor_Graph_Area_Vs_Status.rows;
};

const editor_Graph_Bar_Status_Vs_Analista = async (cidade: string, name: string) => {

  const client = await createConection();

  const graphbarstatusvsanalista = await client.query(

    `SELECT atribuicao AS Analista,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade}  
     WHERE status = 'andamento' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS andamento,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade} 
     WHERE status = 'finalizado' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS finalizado
FROM ${cidade} t
WHERE atribuicao = $1
GROUP BY atribuicao

EXCEPT

SELECT atribuicao AS Analista,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade} 
     WHERE status = 'andamento' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS andamento,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM ${cidade} 
     WHERE status = 'finalizado' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS finalizado
FROM ${cidade} t
WHERE status IS NULL
GROUP BY atribuicao;`, [name]

  )

  return graphbarstatusvsanalista.rows;
};

const editor_Correcoes = async (cidadeApontamento: string, cidadeAtuacao: string, name: string) => {

  const client = await createConection();

  const correcoes = await client.query(

    `SELECT a.correcao AS correcao, COUNT(a.correcao) AS total_correcoes 
    FROM ${cidadeApontamento} AS a INNER
    JOIN ${cidadeAtuacao} AS b ON ST_Intersects(a.geom, b.geom)
    WHERE a.correcao IS NOT NULL AND b.atribuicao = $1 
    GROUP BY a.correcao;`, [name]

  )

  return correcoes.rows;
};


export const GraphicModel = {
  graphareavsstatus,
  graphbarstatusvsanalista,
  correcoes,
  editor_Graph_Area_Vs_Status,
  editor_Graph_Bar_Status_Vs_Analista,
  editor_Correcoes
};
