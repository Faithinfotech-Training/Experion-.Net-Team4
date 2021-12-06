using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class UserRepository:IUserRepository
    {
        ClinicManagementSystemContext db;
        //constructor dependency injection
        public UserRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }
        #region Add user
        public async Task<int> AddUser(TblUser user)
        {
            if (db != null)
            {
                await db.TblUser.AddAsync(user);
                await db.SaveChangesAsync();
                return user.UserId;
            }
            return 0;
        }
        #endregion

        #region Get All Users
        public async Task<List<TblUser>> GetAllUsers()
        {
            if (db != null)
            {
                return await db.TblUser.ToListAsync();
            }

            return null;
        }
        #endregion

        #region Get User By ID
        public async Task<ActionResult<TblUser>> GetUserById(int userId)
        {
            if (db != null)
            {
                TblUser test = await db.TblUser.FirstOrDefaultAsync(em => em.UserId == userId);
                return test;
            }
            return null;
        }
        #endregion

        #region Update user

        public async Task<TblUser> UpdateUser(TblUser user)
        {
            if (db != null)
            {
                db.TblUser.Update(user);
                await db.SaveChangesAsync();
                return user;
            }
            return null;
        }


        #endregion
    }
}
