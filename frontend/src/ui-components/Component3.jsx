/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function Component3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="90%"
      height="500px"
      display="block"
      gap="unset"
      alignItems="center"
      justifyContent="unset"
      position="relative"
      // right="50px"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component3")}
      {...rest}
    >
      <View
        width="91.65%"
        height="500px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12.85%"
        bottom="0%"
        left="8.35%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,39,122,1)"
        {...getOverrideProps(overrides, "Rectangle 34")}
      ></View>
      <Image
        width="91.65%"
        height="87.15%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="12.85%"
        left="0%"
        right="8.35%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://th.bing.com/th/id/OIP.NhNa-wXFhBZwfYM9edmdhwHaFS?pid=ImgDet&rs=1"
        {...getOverrideProps(overrides, "Rectangle 44")}
      ></Image>
    </View>
  );
}
