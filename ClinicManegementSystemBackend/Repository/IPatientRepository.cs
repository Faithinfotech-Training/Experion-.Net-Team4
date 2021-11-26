using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface IPatientRepository
    {
        //Register patients --post
        #region RegisterPatients
        Task<int> AddPatient(TblPatient patient);
        #endregion

        //Edit patients --put
        #region Edit Patients
        Task UpdatePatient(TblPatient patient);
        #endregion

    }
}
