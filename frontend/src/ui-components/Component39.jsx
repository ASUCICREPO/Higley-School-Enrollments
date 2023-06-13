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
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Component39(props) {
  const { overrides, ...rest } = props;
  const rectangleFourEightOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <View
      width="50%"
      height="89px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      top="20px"
      right="60px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component39")}
      {...rest}
    >
      <View
        width="232px"
        height="89px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        // top="0%"
        // bottom="0%"
        // left="0%"
        // right="0%"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        border="2px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        onClick={() => {
          rectangleFourEightOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 48")}
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
          height="55px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="19.1%"
          // bottom="19.1%"
          // left="19.83%"
          // right="20.26%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Continue"
          {...getOverrideProps(overrides, "Continue")}
        ></Text>
      </View>
    </View>
  );
}
