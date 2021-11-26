using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
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

    }
}
