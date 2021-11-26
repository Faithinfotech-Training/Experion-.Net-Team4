using ClinicManegementSystemBackend.Models;
using Microsoft.EntityFrameworkCore;
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

        
        #region Get Doctor Notes By PatientId
        public async Task<TblObservation> GetNotesByPatientId(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from o in db.TblObservation
                              where o.PatientId == id
                              select new TblObservation
                              {
                                  ObservationId = o.ObservationId,
                                  Observation = o.Observation,
                                  DoctorNotes = o.DoctorNotes,
                                  IsActive = o.IsActive,
                                  DoctorId = o.DoctorId,
                                  PatientId = o.PatientId
                              }).FirstOrDefaultAsync();
            }
            return null;
        }
        #endregion
        

    }
}
