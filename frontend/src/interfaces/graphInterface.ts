export interface GraphArea {
    status: string;
    total_km2: number;
  }
  
  export interface ChartItem {
    status: string;
    total_km2: string;
  }
  
  export interface DataItem {
    total_km2: string | number;
    status: string | null;
  }
  
  export interface DataItem2{
    analista : string;
    andamento: string | number | null ;
    finalizado: string | number;
  }