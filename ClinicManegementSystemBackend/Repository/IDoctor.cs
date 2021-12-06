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

        //Get Doctor BY User ID
        Task<TblDoctor> GetDoctorByUserID(int id);

        //add new doctor
        public Task<int> AddDoctor(TblDoctor doctor);

        //update doctor
        Task<TblDoctor> UpdateDoctor(TblDoctor doctor);

        #endregion
    }
}
