import React from "react";
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component41, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv, Component39 } from '../ui-components';

const UploadDocs = () => {
    return(
        <>
            <h2 style={{width: '100%', textAlign: 'center', marginTop: '60px'}}>Upload Raw Data</h2>
            <div style={{display: 'flex', width: '100%', marginTop: '60px'}}>
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
            <Component39 width="100%"/>
        </>
    )

}
export default UploadDocs;