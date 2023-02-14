export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      estatísticas: {
        caulculoPorcentagem: number;
        refeiçõesDentroDaDieta: number;
        totalRefeições: number;
        refeiçõesForaDaDieta: number;
        refeiçõesEmSequencia: number;
      };
      registro: undefined;

      
      feedback: {
        type: boolean;
      };
      editar: {
        id: string;
        titulo: string;
        descricao: string;
         data: string;
         hora: string;
         type: boolean;
      };
      refeição: {
        id: string;
       titulo: string;
       descricao: string;
        data: string;
        hora: string;
        type: boolean;
        
      }
     
    }
  }
}