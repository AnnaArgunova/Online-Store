import styled from 'styled-components';

export const Card = styled.div`
 display: flex;
 margin: 10%;
 align-items: center;
  justify-content: center;
 font-family: Arial;
 font-size: 1.5vw;
`;

export const H2 = styled.h2`
color:#01142F; 
text-transform: uppercase;
text-align:center;
`;

export const CardTitle = styled.div`
margin-right: 10%;

`;

export const CardButton = styled.div`
display: flex;
justify-content: space-around;
width:23vw;
`;

export const CardImg = styled.div`
width:20%;

`;

export const Button = styled.div`
border: 1px solid #01142F;
border-radius: 5%;
width: 5vw;
height: 2.5vw;
text-align: center;
cursor:pointer;

:hover {
    color: #01142F;
  }
`;

export const ButtonDel = styled.div`
font-size: 2vw;
cursor:pointer;

`;

export const TotalSum = styled.div`
color:#01142F; 
text-align:center;
font-size: 2vw;
font-weight:bold;
`;