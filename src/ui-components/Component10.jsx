/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component10(props) {
  const { overrides, ...rest } = props;
  const rectangleFiveZeroOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="100%"
      height="282px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component10")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="100%"
        height="166px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        // top="0%"
        // bottom="41.13%"
        // left="34.63%"
        // right="34.81%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Thank you!"
        {...getOverrideProps(overrides, "Thank you!")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="30%"
        height="166px"
        gap="unset"
        alignItems="unset"
        position="relative"
        margin="auto"
        marginTop="60px"
        padding="50px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="The upload process is complete. You will receive an email when it is processed to the Quicksight Dashboard."
        {...getOverrideProps(
          overrides,
          "The upload process is complete. You will receive an email when it is processed to the Quicksight Dashboard."
        )}
      ></Text>
      <View
        width="10%"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="relative"
        margin="auto"
        top="50px"
        // bottom="0%"
        // left="36.22%"
        // right="37.28%"
        border="2px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        onClick={() => {
          rectangleFiveZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 50")}
      >

        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="100%"
          height="31px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          margin="auto"
          // top="85.46%"
          // bottom="3.55%"
          // left="39.05%"
          // right="36.4%"
          padding="10px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Return home"
          {...getOverrideProps(overrides, "Return home")}
        ></Text>
      </View>
    </View>
  );
}
