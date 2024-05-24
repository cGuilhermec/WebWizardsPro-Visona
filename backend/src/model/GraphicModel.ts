import { Client } from "pg";
import { createConection } from "../../database/connection"


const graphareavsstatus = async () => {
  const client = await createConection();
  const graphareavsstatus = await client.query(

    'select ROUND(CAST(SUM(area_km2) AS numeric),2) as total_km2, status from tbgrade_atuacao_atibaia GROUP BY status;'

  );
  return graphareavsstatus.rows;
}

const graphbarstatusvsanalista = async () => {
  const client = await createConection();
  const graphbarstatusvsanalista = await client.query(

    `SELECT atribuicao AS Analista,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM tbgrade_atuacao_atibaia 
     WHERE status = 'andamento' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS andamento,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM tbgrade_atuacao_atibaia 
     WHERE status = 'finalizado' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS finalizado
FROM tbgrade_atuacao_atibaia t
GROUP BY atribuicao

EXCEPT

SELECT atribuicao AS Analista,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM tbgrade_atuacao_atibaia 
     WHERE status = 'andamento' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS andamento,
    (SELECT ROUND(CAST(SUM(area_km2) AS numeric), 2) 
     FROM tbgrade_atuacao_atibaia 
     WHERE status = 'finalizado' AND atribuicao = t.atribuicao 
     GROUP BY atribuicao) AS finalizado
FROM tbgrade_atuacao_atibaia t
WHERE status IS NULL
GROUP BY atribuicao;`

  )
  return graphbarstatusvsanalista.rows;
}

const correcoes = async () => {
  const client = await createConection();
  const correcoes = await client.query(
    `SELECT a.correcao AS correcao, COUNT(a.correcao) AS total_correcoes 
	FROM tbapontamento_alteracao_atibaia AS a INNER
JOIN tbgrade_atuacao_atibaia AS b ON ST_Intersects(a.geom, b.geom) 
GROUP BY 
    a.correcao;`

  )
  return correcoes.rows;
}

export const GraphicModel = {
  graphareavsstatus,
  graphbarstatusvsanalista,
  correcoes
};
