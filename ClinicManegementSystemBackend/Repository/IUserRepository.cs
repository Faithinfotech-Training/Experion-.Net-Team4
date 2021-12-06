using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
  public  interface IUserRepository
    {
        Task<int> AddUser(TblUser user);
        Task<List<TblUser>> GetAllUsers();
        Task<ActionResult<TblUser>> GetUserById(int userId);
        Task<TblUser> UpdateUser(TblUser user);
    }
}
