/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component56(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="40%"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      // margin="auto"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component56")}
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
        {...getOverrideProps(overrides, "Rectangle 64")}
      >
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
          width="100%"
          height="39px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          // top="10%"
          // bottom="12%"
          // left="3%"
          // right="2.67%"
          padding="10px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Continue"
          {...getOverrideProps(overrides, "Continue")}
        ></Text>
      </View>
    </View>
  );
}
