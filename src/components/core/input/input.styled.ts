import styled from "styled-components"

export const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 10px;

  background: ${({ theme }) => theme.colors.primary.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.primary.borderColor};
  border-radius: 8px;
  align-self: stretch;
`
