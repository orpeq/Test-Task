import styled from "styled-components"

export const Status = styled.div<{ status: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 12px;
  width: 555px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.default};
  background: ${(props) =>
    props.status === "success"
      ? props.theme.colors.primary.successBackground
      : props.theme.colors.primary.errorBackground};
  border-radius: 8px;

  @media ${({ theme }) => theme.media.maxTablet} {
    width: 85vw;
  }
`
