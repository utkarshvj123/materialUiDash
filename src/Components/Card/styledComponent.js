import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  align-items: flex-start;
  border: 1px solid rgb(235, 235, 235);
  .isoSaleLabel {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    color: rgb(50, 51, 50);
    margin: 0px 0px 20px;
  }
  .isoSalePrice {
    font-size: 28px;
    font-weight: 300;
    line-height: 1.2;
    margin: 0px 0px 20px;
    color: rgb(247, 93, 129);
  }
  .isoSaleDetails {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(151, 151, 151);
    margin: 0px;
  }
`;
