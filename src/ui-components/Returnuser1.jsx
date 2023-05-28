/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import AhusdL1 from "./AhusdL1";
import Component5 from "./Component5";
import Component54 from "./Component54";
export default function Returnuser1(props) {
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
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Returnuser1")}
      {...rest}
    >
      <View
        width="1440px"
        height="584px"
        {...getOverrideProps(overrides, "ClassImage")}
      ></View>
      <AhusdL1
        width="180px"
        height="140px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24px"
        left="24px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "_ahusdL 3")}
      ></AhusdL1>
      <Component5
        width="761px"
        height="68px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        bottom="618px"
        left="calc(50% - 380.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 5")}
      ></Component5>
      <Component54
        width="400px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="802px"
        left="520px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 54")}
      ></Component54>
    </View>
  );
}
