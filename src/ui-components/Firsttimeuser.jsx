/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Component3 from "./Component3";
import Component5 from "./Component5";
import Component4 from "./Component4";
export default function Firsttimeuser(props) {
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
      {...getOverrideProps(overrides, "Firsttimeuser")}
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
        left="-23px"
        border="2px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 33")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="366px"
        height="47px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26px"
        left="59px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Higley School District"
        {...getOverrideProps(overrides, "Higley School District")}
      ></Text>
      <Component3
        width="599px"
        height="389px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="345px"
        left="717px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 3")}
      ></Component3>
      <Component5
        width="724px"
        height="518px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="198px"
        left="63px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 5")}
      ></Component5>
      <Component4
        width="300px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="634px"
        left="209px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 4")}
      ></Component4>
    </View>
  );
}
