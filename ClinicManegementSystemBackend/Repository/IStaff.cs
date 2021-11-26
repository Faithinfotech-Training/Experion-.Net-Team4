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

        //add new staff
        public Task<int> AddStaff(TblStaff staff);

        //update staff

        public Task<int> UpdateStaff(TblStaff staff);

        #endregion

    }
}
