/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component9(props) {
  const { overrides, ...rest } = props;
  const rectangleFourNineOnClick = useNavigateAction({
    type: "url",
    url: "/replacedocs",
  });
  return (
    <View
      width="505px"
      height="284px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component9")}
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
        width="381px"
        height="166px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="41.55%"
        left="12.28%"
        right="12.28%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Use previous prediction?"
        {...getOverrideProps(overrides, "Use previous prediction?")}
      ></Text>
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
        width="450px"
        height="166px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="27.11%"
        bottom="14.44%"
        left="5.54%"
        right="5.35%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="The last prediction was on January 22, 2023."
        {...getOverrideProps(
          overrides,
          "The last prediction was on January 22, 2023."
        )}
      ></Text>
      <View
        width="150px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="82.39%"
        bottom="0%"
        left="0%"
        right="70.3%"
        border="2px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 48")}
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
        width="36px"
        height="31px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="85.56%"
        bottom="3.52%"
        left="11.29%"
        right="81.58%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Yes"
        {...getOverrideProps(overrides, "Yes")}
      ></Text>
      <View
        width="150px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="82.39%"
        bottom="0%"
        left="70.3%"
        right="0%"
        border="2px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        onClick={() => {
          rectangleFourNineOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 49")}
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
        width="28px"
        height="31px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="85.56%"
        bottom="3.52%"
        left="82.38%"
        right="12.08%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="No"
        {...getOverrideProps(overrides, "No")}
      ></Text>
    </View>
  );
}
