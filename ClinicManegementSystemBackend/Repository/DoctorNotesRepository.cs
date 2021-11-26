using ClinicManegementSystemBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class DoctorNotesRepository : IDoctorNotesRepository
    {
        //database/json
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public DoctorNotesRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }
        #region Add Doctor Notes
        public async Task<int> AddNotes(TblObservation notes)
        {
            if (db != null)
            {
                await db.TblObservation.AddAsync(notes);
                await db.SaveChangesAsync();//commit the transaction
                return notes.ObservationId;
            }
            return 0;
        }
        #endregion

        /*
        #region Get Doctor Notes By PatientId
        public async Task<TblPatient> GetPatientByDoctorId(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from o in db.TblObservation
                              where o.patient == id
                              select new TblPatient
                              {
                                  PatientId = p.PatientId,
                                  PatientName = p.PatientName,
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
        */

    }
}
