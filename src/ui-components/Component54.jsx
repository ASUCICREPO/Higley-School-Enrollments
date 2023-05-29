/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component54(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="50%"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      margin="auto"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component54")}
      {...rest}
    >
      <View
        width="400px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)" 
        // top="0%"
        // bottom="0%"
        // left="0%"
        // right="0%"
        borderRadius="10px"
        // padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,39,122,1)"
        {...getOverrideProps(overrides, "Rectangle 61")}
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
          height="25px"
          gap="unset"
          alignItems="center"
          position="absolute"
          // top="33%"
          // bottom="34%"
          // left="27.75%"
          // right="27.5%"
          padding="10px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Start prediction"
          {...getOverrideProps(overrides, "Start prediction")}
        ></Text>
      </View>
    </View>
  );
}
