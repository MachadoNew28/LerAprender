import styled from 'styled-components';

export const Div = styled.div`
  width:100%;
  height:800px;
  /*************************** */
  top:-1px;
  /****************************/
  border-radius:1%;
  border:4px solid #f1cc73;
  background-color:#00010021;
  /***************************** */
  display:flex;
  border-top:0;
  flex-direction:row;
  /***************************** */
 
`;
export const Menu = styled.div`
  background-color:#f1cc706a;
  border-radius:12px;
/*************** */
  width:100%;
  height:560px;
 /*************************** */
  margin:0;
  margin-top:24%;
  padding:20px 0;
  /*************************** */
  /***************************** */
  display:flex;
  align-items:center;
  justify-content:center;
  flex-grow:120;
  flex-wrap:wrap;
  /***************************** */
  overflow:auto;
  /*************************************** */
  &::-webkit-scrollbar{
    width:14px;
   
    border-radius:12px;
   }
  &::-webkit-scrollbar-thumb{
    background:#fcc642;
    margin-right:12px;
    width:2px;
    border-radius:12px;
  }
  /*******************Esitizando O Link************************ */
  #link{
    width:42%;
    height:120px;
  /*************************** */
    margin:12px;
    padding:12px;

  }
 /********************************************* */
`;
/**_________________________________________________________ */

export const Item = styled.div`
    /****************************/
  background-color:#fff;
  border-radius:5%;
 /* box-shadow:2px 1px 12px 2px #0001006a;*/
  /***************************** */
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  /****************************** */
  &:hover{
    width:43%;
  }
   /***************************** */
`;
/*_______________________________________*/

export const Icon = styled.div`
  width:90%;
  height:80px;
  /** *****************************************/
  font-size:100px;
  /*************** */
  /*************************** */
  margin:4px;
  /****************************/
  background-color:#fff;
  border-radius:5%;
 /* box-shadow:2px 1px 12px 2px #0001006a;*/
  /***************************** */
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  /****************************** */
  
   /***************************** */
`;
/*__________________________________________*/
export const Title = styled.div`
  width:100%;
  height:30px;
  /*************************** */
   
  /****************************/
  color:#fff;
  /****************************/
 
  
 /* box-shadow:2px 1px 12px 2px #0001006a;*/
  /***************************** */
  display:flex;
  align-items:center;
  justify-content:center;
  /****************************** */
   
   /***************************** */
`;

