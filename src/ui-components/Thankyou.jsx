/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Component10 from "./Component10";
import { View } from "@aws-amplify/ui-react";
export default function Thankyou(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      margin-top="60px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Thankyou")}
      {...rest}
    >
      <Component10
        width="566px"
        height="282px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="364px"
        left="437px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 10")}
      ></Component10>
    </View>
  );
}
