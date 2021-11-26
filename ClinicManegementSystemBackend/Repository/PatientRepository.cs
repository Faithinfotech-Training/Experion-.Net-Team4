using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class PatientRepository : IPatientRepository
    {
        //database/json
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public PatientRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }

        //register patient --post
        #region Register Patient
        public async Task<int> AddPatient(TblPatient patient)
        {
                if (db != null)
                {
                    await db.TblPatient.AddAsync(patient);
                    await db.SaveChangesAsync();//commit the transaction
                    return patient.PatientId;
                }
                return 0;
            
        }
        #endregion

        //Edit Patient --put
        #region Edit Patient
        public async Task UpdatePatient(TblPatient patient)
        {
                if (db != null)
                {
                    db.TblPatient.Update(patient);
                    await db.SaveChangesAsync();//commit the transaction

                }           

        }
        #endregion

        //Get by Id And Get By DoctorId
        #region Get Patient By DoctorId
        public async Task<TblPatient> GetPatientByDoctorId(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from p in db.TblPatient
                              where p.DoctorId == id
                              select new TblPatient
                              {
                                  PatientId = p.PatientId,
                                  PatientName=p.PatientName,
                                  PatientAge = p.PatientAge,
                                  PatientGender = p.PatientGender,
                                  BloodGroup = p.BloodGroup,
                                  PatientAddress = p.PatientAddress,
                                  PatientPhone = p.PatientPhone,
                                  EmergencyContact = p.EmergencyContact,
                                  PatientEmail = p.PatientEmail,
                                  IsActive = p.IsActive,
                                  DoctorId = p.DoctorId
                              }).FirstOrDefaultAsync();
            }
            return null;
        }
        #endregion

        #region Get Patient By ID        
        public async Task<ActionResult<TblPatient>> GetPatientById(int patientId)
        {
            if (db != null)
            {
                TblPatient test = await db.TblPatient.FirstOrDefaultAsync(em => em.PatientId == patientId);
                return test;
            }
            return null;
        }
        #endregion

        
        //Get All Patients
        #region Get Patients       
        public async Task<List<TblPatient>> GetPatients()
        {
            if (db != null)
            {
                return await db.TblPatient.ToListAsync();
            }
            return null;
        }
        #endregion

    }
}
