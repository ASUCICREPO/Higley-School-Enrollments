/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component55(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component55")}
      {...rest}
    >
      <View
        width="300px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,39,122,1)"
        {...getOverrideProps(overrides, "Rectangle 63")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="280px"
        height="37px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12%"
        bottom="14%"
        left="3.33%"
        right="3.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Submit"
        {...getOverrideProps(overrides, "Submit")}
      ></Text>
    </View>
  );
}
