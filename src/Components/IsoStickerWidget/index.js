import React from "react";
import { Container } from "./styledComponent";

const stylePropsDefault = {};

const IsoStickerWidget = ({
  styleProp = stylePropsDefault,
  icon: IconDisplay,
  styles,
}) => {
  return (
    <Container
      className="isoStickerWidget"
      styleProps={styleProp}
      styles={styles}
    >
      <div className="isoIconWrapper">
        <IconDisplay className="ion-android-camera" />
      </div>
      <div className="isoContentWrapper">
        <h3 className="isoStatNumber">
          <span>210</span>
        </h3>
        <span className="isoLabel">
          <span>Image Upload</span>
        </span>
      </div>
    </Container>
  );
};
export default IsoStickerWidget;
