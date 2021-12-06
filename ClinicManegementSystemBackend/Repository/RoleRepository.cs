using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class RoleRepository : IRoleRepository
    {
        ClinicManagementSystemContext db;
        //constructor dependency injection
        public RoleRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }
        #region Add Role
        public async Task<int> AddRole(TblRole role)
        {
            if (db != null)
            {
                await db.TblRole.AddAsync(role);
                await db.SaveChangesAsync();
                return role.RoleId;
            }
            return 0;
        }
        #endregion

        #region Get All Roles
        public async Task<List<TblRole>> GetAllRoles()
        {
            if (db != null)
            {
                return await db.TblRole.ToListAsync();
            }

            return null;
        }
        #endregion

        #region Get Role By ID
        public async Task<ActionResult<TblRole>> GetRoleById(int RoleId)
        {
            if (db != null)
            {
                TblRole test = await db.TblRole.FirstOrDefaultAsync(em => em.RoleId == RoleId);
                return test;
            }
            return null;
        }
        #endregion

        #region Update Role

        public async Task<TblRole> UpdateRole(TblRole role)
        {
            if (db != null)
            {
                db.TblRole.Update(role);
                await db.SaveChangesAsync();
                return role;
            }
            return null;
        }


        #endregion
    }
}
