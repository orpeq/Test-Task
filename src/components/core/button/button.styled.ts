import styled from "styled-components"

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 12px;
  background: ${({ theme }) => theme.colors.primary.buttonBackground};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary.primaryWhite};
  border: none;
  width: max-content;
  cursor: pointer;

  :disabled {
    background: ${({ theme }) => theme.colors.primary.buttonDisabledBackground};
    color: ${({ theme }) => theme.colors.primary.buttonDisabledColor};
`
