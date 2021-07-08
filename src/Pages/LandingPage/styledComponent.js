import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";

export const HeaderCompo = styled(Toolbar)`
  ${(props) => console.log("props....", props)}
  position: relative;
  .MuiIconButton-edgeStart {
    margin-right: 36px;
    position: absolute;
    left: ${(props) => (!props.isOpen ? "6rem" : "1rem")};
    color: black;
  }
`;

export const SideContainer = styled(Drawer)`
  z-index: 99999;
  background: rgb(45, 52, 70);
  .MuiDrawer-paper {
    background: inherit;
    .MuiListItem-root {
      :hover {
        background: black;
        color: white !important;
      }
      color: grey;
      .MuiListItemIcon-root {
        color: inherit;
      }
    }
  }
`;

export const HeaderDetail = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  .manageIcon {
    position: relative;
    margin-right: 35px;
    .upper-container {
      position: absolute;
      font-size: 12px;
      color: rgb(255, 255, 255);
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 20px;
      position: absolute;
      top: -8px;
      left: 17px;
      right: inherit;
      border-radius: 50%;
    }
  }
  .profile-image {
    position: relative;
    .imgVisible {
      width: 40px;
      height: 40px;
    }
    .img-online {
      width: 10px;
      height: 10px;
      display: block;
      background-color: rgb(126, 211, 33);
      position: absolute;
      bottom: 5px;
      right: 3px;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 50%;
      position: absolute;
      cursor: pointer;
    }
  }
  .MuiSvgIcon-root {
    font-size: 30px;
    cursor: pointer;
  }
`;
