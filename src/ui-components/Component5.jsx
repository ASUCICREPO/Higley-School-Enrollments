/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component5(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="100%"
      height="200px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component5")}
      {...rest}
    >
      {/* <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="489px"
        height="371px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28.38%"
        bottom="0%"
        left="0%"
        right="32.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Steps:&#xA;Upload raw data&#xA;Trigger model&#xA;Upload prediction data&#xA;Link to dashboard"
        {...getOverrideProps(
          overrides,
          "Steps: Upload raw data Trigger model Upload prediction data Link to dashboard"
        )}
      ></Text> */}
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="48.409088134765625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="100%"
        height="124px"
        gap="unset"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="76.06%"
        left="10%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome to Enrollment Prediction!"
        {...getOverrideProps(overrides, "Welcome to Enrollment Prediction!")}
      ></Text>
    </View>
  );
}
