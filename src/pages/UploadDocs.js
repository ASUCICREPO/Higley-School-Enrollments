import React from "react";
// import { Firsttimeuser, Rectangle35 } from "../ui-components";
import { Component11, Component12, Component13, Component14, Component15, Component16, Component17, Component18, Component19, Component20, Component21, Component22, Uploaddocs } from '../ui-components';
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component41, Enrollmentcountscsv, Housingpopulationcsv, Landdevelopmentscsv, Personaddresshistorycsv, Studentactivitiescsv, Studentattendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, Studentenrollmentscsv, Schoollunchcsv } from '../ui-components';
import SchoolLunchcsv from "../ui-components/Schoollunchcsv";

const UploadDocs = () => {
    return(
        <>
            <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <BirthrateGDPUScsv />
                    <Component41 />
                    <Enrollmentcountscsv />
                    <Component41 />
                    <EnrollmentGradescsv />
                    <Component41 />
                    <Housingpopulationcsv />
                    <Component41 />
                    <Landdevelopmentscsv />
                    <Component41 />
                    <SchoolLunchcsv />
                    <Component41 />
                    <Schoollunchcsv />
                    <Component41 />
                </div>
                <div style={{width: '50%'}}>
                    <Personaddresshistorycsv />
                    <Component41 />
                    <Studentactivitiescsv />
                    <Component41 />
                    <Studentattendancecsv />
                    <Component41 />
                    <StudentBenchmarkscsv />
                    <Component41 />
                    <StudentDemographicscsv />
                    <Component41 />
                    <Studentenrollmentscsv />
                    <Component41 />

                </div>
            </div>
            {/* <Uploaddocs width='100%' /> */}
        </>
    )

}
export default UploadDocs;