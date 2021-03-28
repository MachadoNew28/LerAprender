import styled from 'styled-components';

const Letra = styled.div`
  width : 25%;
  height : 80px;
  /************************/
  color:#fff;
  font-size :50px;
  font-weight:bold;
  /************************/
  display : flex;
  align-items : center;
  justify-content : center;
  /************************/
  margin : 13px;
  padding : 12px;
  /************************/
  border-radius : 12px;
  border:2px solid #fff;
  /************************/
  &:hover {
    width : 26%;
    height : 81px;
    /************************/
    font-size :70px;
    /************************/
  }
   

`;
export default Letra;
 