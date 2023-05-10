/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Rectangle35 from "./Rectangle35";
import HigleySchoolDistrict from "./HigleySchoolDistrict";
import HigleySchoolDistrictEnrollmentPredictions from "./HigleySchoolDistrictEnrollmentPredictions";
import Component1 from "./Component1";
import Component2 from "./Component2";
import { View } from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <Rectangle35
        width="1481px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 35")}
      ></Rectangle35>
      <HigleySchoolDistrict
        width="366px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="26px"
        left="47px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Higley School District")}
      ></HigleySchoolDistrict>
      <HigleySchoolDistrictEnrollmentPredictions
        width="366px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="330px"
        left="calc(50% - 183px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "Higley School District Enrollment Predictions"
        )}
      ></HigleySchoolDistrictEnrollmentPredictions>
      <Component1
        width="500px"
        height="140px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="482px"
        left="calc(50% - 250px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 1")}
      ></Component1>
      <Component2
        width="120px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="658px"
        left="calc(50% - 60px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 2")}
      ></Component2>
    </View>
  );
}
