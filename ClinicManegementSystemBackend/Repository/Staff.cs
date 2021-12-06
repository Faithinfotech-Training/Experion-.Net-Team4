using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class Staff : IStaff
    {
        ClinicManagementSystemContext db;
        //constructor dependency injection
        public Staff(ClinicManagementSystemContext _db)
        {
            db = _db;
        }
        #region Add Staff
        public async Task<int> AddStaff(TblStaff staff)
        {
            if (db != null)
            {
                await db.TblStaff.AddAsync(staff);
                await db.SaveChangesAsync();
                return staff.StaffId;
            }
            return 0;
        }
        #endregion

        #region Get All Staff
        public async Task<List<TblStaff>> GetAllStaff()
        {
            if (db != null)
            {
                return await db.TblStaff.ToListAsync();
            }

            return null;
        }

        #endregion

        #region Get Staff By ID
        public async Task<ActionResult<TblStaff>> GetStaffById(int staffId)
        {
            if (db != null)
            {
                TblStaff staff = await db.TblStaff.FirstOrDefaultAsync(em => em.StaffId == staffId);
                return staff;
            }
            return null;
        }
        #endregion

        #region Get Doctor BY User ID
        public async Task<TblStaff> GetStaffByUserID(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from o in db.TblStaff
                              where o.UserId == id
                              select new TblStaff
                              {
                                  StaffId = o.StaffId,
                                  StaffName = o.StaffName,
                                  StaffAddress = o.StaffAddress,
                                  StaffPhone = o.StaffPhone,
                                  StaffEmail = o.StaffEmail,
                                  StaffAge = o.StaffAge,
                                  StaffGender = o.StaffGender,
                                  StaffQualification = o.StaffQualification,
                                  StaffDateOfJoining = o.StaffDateOfJoining,
                                  IsActive = o.IsActive,
                                  UserId = o.UserId
                              }).FirstOrDefaultAsync();
            }
            return null;
        }
        #endregion

        #region Update Staff
        public async Task<TblStaff> UpdateStaff(TblStaff staff)
        {
            if (db != null)
            {
                db.TblStaff.Update(staff);
                await db.SaveChangesAsync();
                return staff;
            }
            return null;
        }

        


        #endregion
    }
}