import React from "react";
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component41, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv, Component39 } from '../ui-components';

const UploadDocs = () => {
    return(
        <>
            <h2 style={{width: '100%', textAlign: 'center', marginTop: '60px', paddingRight: '50px'}}>Upload Raw Data</h2>
            <div style={{display: 'flex', width: '100%'}}>
                <div style={{width: '50%'}}>
                    <BirthrateGDPUScsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <EnrollmentCountscsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <EnrollmentGradescsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <HousingPopulationcsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <LandDevelopmentscsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <SchoolLunchcsv margin="auto" />
                    <Component41 marginLeft="260px" />
                </div>
                <div style={{width: '50%'}}>
                    <PersonAddressHistorycsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <StudentActivitiescsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <StudentAttendancecsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <StudentBenchmarkscsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <StudentDemographicscsv margin="auto" />
                    <Component41 marginLeft="260px" />
                    <StudentEnrollmentscsv margin="auto"/>
                    <Component41 marginLeft="260px" />
                </div>
            </div>
            <Component39 width="100%"/>
        </>
    )

}
export default UploadDocs;