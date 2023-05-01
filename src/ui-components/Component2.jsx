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
import { Icon, View } from "@aws-amplify/ui-react";
export default function Component2(props) {
  const { component2, overrides, ...rest } = props;
  const componentTwoOnClick = useNavigateAction({
    type: "url",
    url: component2,
  });
  const nounarrowTwoZeroFiveZeroTwoZeroOneOneOnClick = useNavigateAction({
    type: "url",
    url: "/user-details",
  });
  return (
    <View
      width="120px"
      height="120px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={() => {
        componentTwoOnClick();
      }}
      {...getOverrideProps(overrides, "Component2")}
      {...rest}
    >
      <Icon
        width="75px"
        height="75px"
        viewBox={{ minX: 0, minY: 0, width: 75, height: 75 }}
        paths={[
          {
            d: "M73 37.5C73 57.1061 57.1061 73 37.5 73L37.5 77C59.3152 77 77 59.3152 77 37.5L73 37.5ZM37.5 73C17.8939 73 2 57.1061 2 37.5L-2 37.5C-2 59.3152 15.6848 77 37.5 77L37.5 73ZM2 37.5C2 17.8939 17.8939 2 37.5 2L37.5 -2C15.6848 -2 -2 15.6848 -2 37.5L2 37.5ZM37.5 2C57.1061 2 73 17.8939 73 37.5L77 37.5C77 15.6848 59.3152 -2 37.5 -2L37.5 2Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18.33%"
        bottom="19.17%"
        left="19.17%"
        right="18.33%"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <View
        width="120px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        onClick={() => {
          nounarrowTwoZeroFiveZeroTwoZeroOneOneOnClick();
        }}
        {...getOverrideProps(overrides, "noun-arrow-2050201 1")}
      >
        <Icon
          width="42.51px"
          height="33.44px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 42.50927734375,
            height: 33.4398193359375,
          }}
          paths={[
            {
              d: "M42.5093 16.72L25.7893 0L22.601 3.2117L33.842 14.4527L0 14.4527L0 18.9871L33.842 18.9871L22.601 30.2281L25.7893 33.4398L42.5093 16.72Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="36.07%"
          bottom="36.07%"
          left="32.29%"
          right="32.29%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
