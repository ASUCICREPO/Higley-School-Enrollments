import React from "react";
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component41, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv, Component39, Uploadfiles } from '../ui-components';

const UploadDocs = () => {
    return(
        <>
            {/* <h1 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "20px", fontWeight: "400"}}>Upload Raw Data</h1> */}
            <Uploadfiles margin="20px" />
            {/* <h2 style={{width: '100%', textAlign: 'center', marginTop: '60px', paddingRight: '50px'}}>Upload Raw Data</h2> */}
            <div style={{display: 'flex', width: '50%'}}>
                    <BirthrateGDPUScsv />
                    <Component41 />
            </div>
            <div style={{width: '50%'}}>
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
            <Component39 width="100%"/>
        </>
    )

}
export default UploadDocs;