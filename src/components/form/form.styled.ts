import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 160px;

  @media ${({ theme }) => theme.media.maxTablet} {
    margin: 0;
    width: 100%;
  }
`

export const Heading = styled.h1`
  top: 74px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  line-height: ${({ theme }) => theme.lineHeights.h1};
  color: ${({ theme }) => theme.colors.primary.primaryBlack};
  padding: 0 0 0 12px;

  @media ${({ theme }) => theme.media.maxTablet} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: ${({ theme }) => theme.lineHeights.xl};
    text-align: center;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 343px;
  padding: 12px;

  @media ${({ theme }) => theme.media.maxTablet} {
    max-width: 100%;
  }

  :last-of-type {
    gap: 24px;
  }
`

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`

export const ValidationErrorMessage = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.md};
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary.errorMessageColor};
  margin-top: 12px;

  img {
    height: 16px;
    width: 16px;
  }
`
