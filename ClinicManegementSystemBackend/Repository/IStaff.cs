using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface IStaff
    {
        //Asyncronous operation

        #region Staff

        //get all staff
        public Task<List<TblStaff>> GetAllStaff();

        //get staff by id
        public Task<ActionResult<TblStaff>> GetStaffById(int staffId);

        //Get Staff By User ID
        Task<TblStaff> GetStaffByUserID(int id);

        //add new staff
        public Task<int> AddStaff(TblStaff staff);

        //update staff

        Task<TblStaff> UpdateStaff(TblStaff staff);

        #endregion

    }
}
