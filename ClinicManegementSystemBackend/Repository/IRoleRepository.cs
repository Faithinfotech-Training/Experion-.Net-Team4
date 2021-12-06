using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface IRoleRepository
    {
        Task<int> AddRole(TblRole role);

        Task<List<TblRole>> GetAllRoles();

        Task<ActionResult<TblRole>> GetRoleById(int RoleId);

        Task<TblRole> UpdateRole(TblRole role);

    }
}
