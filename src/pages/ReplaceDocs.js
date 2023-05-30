import React from "react";
import { useNavigate } from 'react-router-dom';
import { Component56, Uploadfiles } from '../ui-components';
import { Birthrategdpus1csv, Enrollmentcounts1csv, Enrollmentgrades1csv, Housingpopulation1csv, Landdevelopments1csv, Nounx21478471, Personaddresshistory1csv, Schoollunch1csv, Studentactivities1csv, Studentattendance1csv, Studentbenchmarks1csv, Studentdemographics1csv, Studentenrollments1csv } from '../ui-components';
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component41, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv, Component53 } from '../ui-components';

const ReplaceDocs = () => {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/thankyou');
    }
    return(
        <>
            <Uploadfiles margin="20px" />
            <div style={{display: 'flex', width: '50%'}}>
                    <BirthrateGDPUScsv margin="20px"  />
                    <Birthrategdpus1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <EnrollmentCountscsv margin="20px"  />
                    <Enrollmentcounts1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <EnrollmentGradescsv margin="20px"  />
                    <Enrollmentgrades1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <HousingPopulationcsv margin="20px"  />
                    <Housingpopulation1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <LandDevelopmentscsv margin="20px"  />
                    <Landdevelopments1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <SchoolLunchcsv margin="20px"  />
                    <Schoollunch1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <PersonAddressHistorycsv margin="20px"  />
                    <Personaddresshistory1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentActivitiescsv margin="20px"  />
                    <Studentactivities1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentAttendancecsv margin="20px"  />
                    <Studentattendance1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentBenchmarkscsv margin="20px"  />
                    <Studentbenchmarks1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentDemographicscsv margin="20px"  />
                    <Studentdemographics1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentEnrollmentscsv margin="20px"  />
                    <Studentenrollments1csv margin="20px" />
                    <Nounx21478471 margin="20px"  />
            </div>

            <Component56 width="50%"  margin="20px" onClick={handleClick}/>
        </>
    )

}
export default ReplaceDocs;
