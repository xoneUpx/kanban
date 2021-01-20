import styled, { css } from 'styled-components';

const CusBut  = styled.button`background: transparent;  ${props => props.lanes && css`background: pink`}; ${props => props.logout && css`background: red; color: white;` }`;
export {  CusBut };
