import styled from 'styled-components'

const Opacidade =styled.div`
    position:absolute;
    z-index:4;
    width:100%;
    height:625px;
    background-color:#0e0d0ddc;

    display:flex;
    align-items:center;
    justify-content:center;

    .form-login{
        height:490px;
        width:40%;
        background-color:#fff;
        border-radius:4px;

        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-direction:column;

        .div-header{
            display:flex;
            align-items:center;             
            justify-content:space-between;
            width:100%;
            border:none;
            height:50px;
            padding:12px;
            border-bottom:1px solid #eee;
            .title{
               font-size:13px;
               margin:0;
               width:none;
               display:initial;
               font-family:Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
         }
         .div-log-cad{
            display:flex;
            align-items:center;             
            justify-content:flex-start;
            width:98%;
            border:none;
            height:100px;
            padding:12px;
            background-color:#ececece7;
            .link-cad, .link-log{

                font-size:17px;
                color:#fff;
                background-color:${(active) =>( active == 1 ?'#ffc31de7':'#2e2d2bf6;')};
                padding:17px; 
                &:hover{
                    background-color:#ffc31de7;
                }           
            }
            .link-cad{
                background-color:${(active) =>( active == 1 ? '#2e2d2bf6;':'#ffc31de7')};
            }
         }
        
         .div-input{  
            justify-content:center;
            align-items:center;
            flex-direction:row;
            height:200px;
            border:none;
             
            border-bottom:1px solid #ececece7;
            .input{
                height:50px;
                width:80%;
                outline:none;
                border:1px solid #eee;
                border-radius:2px;
                margin:12px;padding:10px;
            }
         }
        
        .div-footer{
            height:70px;
            width:95%;
            border:none;
            display:flex;
            align-items:center;
            padding-bottom:20px;
            margin-bottom:14px;

            #button-enter,#button-cancel{ font-size:17px;
                color:#fff;
                background-color:${(active) =>( active ?'#ffc31de7':'#2e2d2bf6;')};
                padding:17px; 
                height:50px;
                border-radius:2px;
                &:hover{
                    background-color:#ffc31de7;
                }           
            }
            #button-cancel{
                background-color:${(active) =>( active ? '#2e2d2bf6;':'#ffc31de7')};
            }       
        }

        .see-password{
            position:absolute;
            top:54%;
            left:60%;
            font-size:14px;
            cursor:pointer;
            color:#0e0d0ddc;
        }
         
        .link-reset-password{
             
            display:flex;
            align-items:flex-start;
            justify-content:flex-start;
            width:90%;
            margin: 20px 0 0 20px;
            font-size:10px;
        }

    }
    
    /**ESTILIZANDO O CADASTRAMENO */
    .form-cadastro{
        height:606px;
        width:58%;
        background-color:#fff;
        border-radius:4px;
        
        display:flex;
        align-items:center;
        flex-direction:column;
        flex-wrap:wrap;
        justify-content:space-between;
        
         .div-header{
            display:flex;
            align-items:center;             
            justify-content:space-between;
            width:100%;
            border:none;
            height:50px;
            padding:12px;
            border-bottom:1px solid #eee;
            .title{
               font-size:13px;
               margin:0;
               width:none;
               display:initial;
               font-family:Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
         }

         .div-log-cad{
            display:flex;
            align-items:center;             
            justify-content:flex-start;
            width:98%;
            border:none;
            height:100px;
            padding:12px;
            background-color:#ececece7;
            .link-cad, .link-log{

                font-size:17px;
                color:#fff;
                background-color:${(active) =>( active ?'#ffc31de7':'#2e2d2bf6;')};
                padding:17px; 
                &:hover{
                    background-color:#ffc31de7;
                }           
            }
            .link-cad{
                background-color:${(active) =>( active ? '#2e2d2bf6;':'#ffc31de7')};
            }
         }
       
        .input{
            height:40px;
            width:36%;
            outline:none;
            border:1px solid #eee;
            border-radius:2px;
            margin:12px;padding:10px;

        }
        .div-footer{
            height:70px;
            width:95%;
            border:none;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-bottom:20px;
            margin-bottom:14px;

            #button-enter,#button-cancel{ font-size:17px;
                color:#fff;
                background-color:${(active) =>( active ?'#ffc31de7':'#2e2d2bf6;')};
                padding:17px; 
                height:50px;
                border-radius:2px;
                &:hover{
                    background-color:#ffc31de7;
                }           
            }
            #button-cancel{
                background-color:${(active) =>( active ? '#2e2d2bf6;':'#ffc31de7')};
            }       
        }

    }
`;
export default Opacidade;


export const Title = styled.h4`
    margin:10px 0 28px 0;
    padding-bottom:8px;
    font-size:23px;
    width:90%;
    display:flex;
    align-items:center;
    justify-content:center;

`
export const Button = styled.button`
    margin:20px 0 10px 0;
    height:40px;
    width:30%;
    outline:none;
    border:1px solid #ffffaa;
    border-radius:6px;
    background-color:#ffffaa;
    color:#0000ff;
    cursor:pointer;

    &:hover{
        opacity:0.6;
    }

    &:active{
        opacity:0.9;
    }

`
export const Image =styled.img`
    width:27%;
    height:100px;
    border-radius:100%;
    border:1px inset #eee;
    margin-top:20px;
`;

export const Fieldset = styled.fieldset`
   display:flex;
   align-items:flex-start;
   justify-content:center;
   flex-wrap:wrap;
   height:270px;
   width:95%;
   border:1px solid #eee;

   .choice-sexo {
      height:50px;
      width:36%;
      border:1px solid #eee;
      margin:12px;
      display:flex;
      align-items:center;
     
      .M, .F{
            margin-right:8px;padding:initial;
      }
   }
`;
export const Div = styled.div`
   display:flex;
   align-items:center;
   height:200px;
   width:90%;
   border:2px solid #eee;
`;