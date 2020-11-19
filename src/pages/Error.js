import React from 'react';
import styled from 'styled-components';
import { Link, Switch } from 'react-router-dom';
const Error = () => {
  return (
   <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Desculpe,Pagina não encontrada</h3>
        <Link to="/" className="btn">
          Voltar pro inicio
        </Link>
     </div>
   </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
