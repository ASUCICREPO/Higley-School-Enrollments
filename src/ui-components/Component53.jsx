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
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Component53(props) {
  const { overrides, ...rest } = props;
  const rectangleFourEightOnClick = useNavigateAction({
    type: "url",
    url: "/thankyou",
  });
  return (
    <View
      width="50%"
      height="89px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      top="20px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component53")}
      {...rest}
    >
      <View
        width="232px"
        height="89px"
        // viewBox={{ minX: 0, minY: 0, width: 232, height: 89 }}
        // paths={[
        //   {
        //     d: "M230 10L230 79L234 79L234 10L230 10ZM222 87L10 87L10 91L222 91L222 87ZM2 79L2 10L-2 10L-2 79L2 79ZM10 2L116 2L116 -2L10 -2L10 2ZM116 2L222 2L222 -2L116 -2L116 2ZM10 87C5.58172 87 2 83.4183 2 79L-2 79C-2 85.6274 3.37259 91 10 91L10 87ZM230 79C230 83.4183 226.418 87 222 87L222 91C228.627 91 234 85.6274 234 79L230 79ZM234 10C234 3.37258 228.627 -2 222 -2L222 2C226.418 2 230 5.58172 230 10L234 10ZM2 10C2 5.58172 5.58172 2 10 2L10 -2C3.37258 -2 -2 3.37258 -2 10L2 10Z",
        //     stroke: "rgba(0,0,0,1)",
        //     fillRule: "nonzero",
        //     strokeWidth: 2,
        //   },
        // ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        // top="0%"
        // bottom="0%"
        // left="0%"
        // right="0%"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        border="2px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        onClick={() => {
          rectangleFourEightOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 48")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="38.727272033691406px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="100%"
          height="55px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="19.1%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Continue"
          {...getOverrideProps(overrides, "Continue")}
        ></Text>
      </View>
    </View>
  );
}
