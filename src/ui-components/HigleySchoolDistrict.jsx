/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function HigleySchoolDistrict(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="100%"
      height="47px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HigleySchoolDistrict")}
      {...rest}
    >
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
        width="100%"
        height="47px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="30px 0px 0px 10px"
        whiteSpace="pre-wrap"
        children="Higley School District Enrollment Prediction"
        {...getOverrideProps(overrides, "Higley School District")}
      ></Text>
    </View>
  );
}
