import styled from "styled-components"
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg"

export const StyledSelect = styled.select`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.primary.inputTextColor};
  background: ${({ theme }) => theme.colors.primary.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.primary.borderColor};
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(${DropdownArrow});
  background-repeat: no-repeat;
  background-position: center right 16px;
`

export const InformativeErrorMessage = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 12px;
  line-height: ${({ theme }) => theme.lineHeights.md};
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.infoTextColor};
`
