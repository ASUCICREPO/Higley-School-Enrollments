/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import HigleySchoolDistrict from "./HigleySchoolDistrict";
import Component9 from "./Component9";
export default function Usepreviousprediction(props) {
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
      {...getOverrideProps(overrides, "Usepreviousprediction")}
      {...rest}
    >
      <View
        width="1481px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="-6px"
        border="2px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 36")}
      ></View>
      <HigleySchoolDistrict
        width="693px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="26px"
        left="89px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Higley School District")}
      ></HigleySchoolDistrict>
      <Component9
        width="505px"
        height="284px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="360px"
        left="467px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 9")}
      ></Component9>
    </View>
  );
}
