import React from "react";
// import { Firsttimeuser, Rectangle35 } from "../ui-components";
import { Component11, Component12, Component13, Component14, Component15, Component16, Component17, Component18, Component19, Component20, Component21, Component22, Uploaddocs } from '../ui-components';
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component41, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv } from '../ui-components';

const UploadDocs = () => {
    return(
        <>
            <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <BirthrateGDPUScsv />
                    <Component41 />
                    <EnrollmentCountscsv />
                    <Component41 />
                    <EnrollmentGradescsv />
                    <Component41 />
                    <HousingPopulationcsv />
                    <Component41 />
                    <LandDevelopmentscsv />
                    <Component41 />
                    <SchoolLunchcsv />
                    <Component41 />
                </div>
                <div style={{width: '50%'}}>
                    <PersonAddressHistorycsv />
                    <Component41 />
                    <StudentActivitiescsv />
                    <Component41 />
                    <StudentAttendancecsv />
                    <Component41 />
                    <StudentBenchmarkscsv />
                    <Component41 />
                    <StudentDemographicscsv />
                    <Component41 />
                    <StudentEnrollmentscsv />
                    <Component41 />

                </div>
            </div>
            {/* <Uploaddocs width='100%' /> */}
        </>
    )

}
export default UploadDocs;