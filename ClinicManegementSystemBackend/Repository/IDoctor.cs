using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
   public interface IDoctor
    {
        //Asyncronous operation

        #region Doctor

        //get all doctors
        public Task<List<TblDoctor>> GetAllDoctors();

        //get doc by id
        public Task<ActionResult<TblDoctor>> GetDoctorById(int doctorId);

        //add new doctor
        public Task<int> AddDoctor(TblDoctor doctor);

        //update doctor

        public Task<int> UpdateDoctor(TblDoctor doctor);

        #endregion
    }
}
