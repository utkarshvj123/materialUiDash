import styled from "styled-components";

export const Container = styled.div`
  ${(props) => console.log(".....", props)}
  ${(props) => props?.styles}
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: ${(props) => props?.styleProps?.borderRadius ?? "5px"};
  background-color: ${(props) =>
    props?.styleProps?.wrapperColor ?? "rgb(66, 165, 246)"};
  color: ${(props) => props?.styleProps?.fontColor ?? "white"};
  .isoIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-shrink: 0;
    background-color: ${(props) =>
      props?.styleProps?.iconBackground ?? "rgb(66, 165, 246)"};
    .MuiSvgIcon-root {
      font-size: ${(props) => props?.styleProps?.iconFOntSize ?? "30px"};
    }
    color: ${(props) => props?.styleProps?.iconColor ?? "inherit"};
  }
  .isoContentWrapper {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    .isoStatNumber {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.1;
      margin: 0px 0px 5px;
      text-shadow: ${(props) =>
        props?.styleProps?.textShadow ?? "rgb(0 0 0 / 0%) 1px 1px 1px"};
      font-weight: 600;
    }
    .isoLabel {
      font-size: 1rem;
      font-weight: 400;
      margin: 0px;
      line-height: 1.2;
      color: ${(props) => props?.styleProps?.isoLabel ?? "inherit"};
      margin: ${(props) => props?.styleProps?.isoLabelMargin ?? "inherit"};
    }
  }
`;
