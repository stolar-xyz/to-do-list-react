import styled from "styled-components";

const Input = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.border};
    padding: 10px;
`;

export default Input;