/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component7(props) {
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
      {...getOverrideProps(overrides, "Component7")}
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
        border="2px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 47")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="31px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18%"
        bottom="20%"
        left="25%"
        right="25%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Start prediction"
        {...getOverrideProps(overrides, "Start prediction")}
      ></Text>
    </View>
  );
}
