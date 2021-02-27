import styled from "styled-components";

const Input = styled.input`
    background-color: ${({ theme }) => theme.colors.input};
    border: 2px solid ${({ theme }) => theme.colors.border};
    padding: 10px;
    color: ${({ theme }) => theme.colors.text};

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    };
`;

export default Input;