import styled from "styled-components";

export const formContainer = styled.section`
  width: 100%;
  display: grid;
  gap: 25px;
  .content{
    width: 100%;
    display: grid;
    gap: 30px;
  }

@media(min-width: 768px){
  .content{
    width: 100%;
    display: flex;
    gap: 30px;
  }
}
`
export const formEndereco = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  gap: 15px;
  
  
  .EnderecoTexto{
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

export const formulario =styled.form` 
  width: 100%;
  display: grid;
  gap: 15px;

input{
  height: 35px;
  background-color: rgba(123, 74, 226, 0.1);
  border-radius: 5px;
  padding-inline: 8px;
  color: #fff;
  font-weight: 500;
}

textarea{
  outline: none ;
  font-size: 18px;
  border-radius: 8px;
  padding: 8px;
}
`