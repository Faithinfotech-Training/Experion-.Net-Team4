using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class UserViewModelRepo : IUserViewModelRepo
    {
        ClinicManagementSystemContext db;
        //constructor dependency injection
        public UserViewModelRepo(ClinicManagementSystemContext _db)
        {
            db = _db;
        }
        public async Task<List<UserViewModel>> GetUserDetails()
        {
            if (db != null)
            {
                //LINQ
                //joining user and role
                return await (
                              from u in db.TblUser
                              from r in db.TblRole
                             
                              where u.RoleId == r.RoleId
                            
                              select new UserViewModel
                              {
                                  UserId = u.UserId,
                                  UserName=u.UserName,
                                  UserPassword=u.UserPassword,
                                  RoleId=u.RoleId,
                                  IsActive=u.IsActive,
                                  RoleName=r.RoleName
                              }
                              ).ToListAsync();

            }
            return null;

        }
    }
}
