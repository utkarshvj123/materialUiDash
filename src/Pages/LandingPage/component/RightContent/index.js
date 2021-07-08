import React, { memo } from "react";
import { Container } from "./styledComponent";
import Grid from "@material-ui/core/Grid";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import IsoStickerWidget from "../../../../Components/IsoStickerWidget/index";
import MailIcon from "@material-ui/icons/Mail";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import IncomeData from "../IncomeData/index";
import Card from "../../../../Components/Card/index";
import TableWrapper from "../../../../Components/TableWrapper";
import CoffeChart from "../../../../Components/CoffeeChart";

const StickerWidgetData = [
  {
    iconName: MailIcon,
    wrapperColor: "rgb(114, 102, 186)",
    iconBackground: "rgba(0, 0, 0, 0.1)",
  },
  {
    iconName: CameraAltIcon,
    wrapperColor: "rgb(66, 165, 246)",
    iconBackground: "rgba(0, 0, 0, 0.1)",
  },
  {
    iconName: QuestionAnswerIcon,
    wrapperColor: "rgb(126, 211, 32)",
    iconBackground: "rgba(0, 0, 0, 0.1)",
  },
  {
    iconName: ShoppingCartIcon,
    wrapperColor: "rgb(247, 93, 129)",
    iconBackground: "rgba(0, 0, 0, 0.1)",
  },
];

const RightContent = ({ contentClass, toolBarClass }) => {
  return (
    <Container className={contentClass}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={12} style={{ marginBottom: "20px" }}>
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <IncomeData />
            </Grid>
            <Grid item lg={8}>
              <TableWrapper />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} style={{ marginBottom: "20px" }}>
          <Grid container spacing={1}>
            {StickerWidgetData.map((obj) => {
              return (
                <Grid item lg={3}>
                  <IsoStickerWidget
                    icon={obj.iconName}
                    styleProp={{
                      wrapperColor: obj.wrapperColor,
                      iconBackground: obj.iconBackground,
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item lg={12} style={{ marginBottom: "20px" }}>
          <Grid container spacing={1}>
            {[0, 1, 2, 3].map((obj) => {
              return (
                <Grid item lg={3}>
                  <Card />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item lg={12} style={{ marginBottom: "20px" }}>
          <Grid container spacing={3}>
            <Grid item lg={3}>
              <IsoStickerWidget
                icon={QuestionAnswerIcon}
                styleProp={{
                  wrapperColor: "white",
                  iconBackground: "tranparent",
                  fontColor: "black",
                  iconColor: "rgb(66, 165, 245)",
                  isoLabel: "grey",
                  borderRadius: "0px",
                  isoLabelMargin: "10px 0px 0px 0px",
                  iconFOntSize: "50px",
                }}
                styles={{
                  padding: " 20px 30px 20px 20px",
                  marginBottom: "20px",
                }}
              />
              <IsoStickerWidget
                icon={MusicNoteIcon}
                styleProp={{
                  wrapperColor: "white",
                  iconBackground: "tranparent",
                  fontColor: "black",
                  iconColor: "rgb(247, 93, 129);",
                  isoLabel: "grey",
                  borderRadius: "0px",
                  isoLabelMargin: "10px 0px 0px 0px",
                  iconFOntSize: "50px",
                }}
                styles={{
                  padding: " 20px 30px 20px 20px",
                  marginBottom: "20px",
                }}
              />
              <IsoStickerWidget
                icon={LocalCafeIcon}
                styleProp={{
                  wrapperColor: "white",
                  iconBackground: "tranparent",
                  fontColor: "black",
                  iconColor: "rgb(254, 172, 1)",
                  isoLabel: "grey",
                  borderRadius: "0px",
                  isoLabelMargin: "10px 0px 0px 0px",
                  iconFOntSize: "50px",
                }}
                styles={{
                  padding: " 20px 30px 20px 20px",
                  marginBottom: "20px",
                }}
              />
              <CoffeChart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(RightContent);
