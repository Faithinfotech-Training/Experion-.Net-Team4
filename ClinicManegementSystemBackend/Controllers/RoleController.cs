using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        IRoleRepository roleRepository;

        public RoleController(IRoleRepository _rr)
        {
            roleRepository = _rr;
        }

        #region get roles
        [HttpGet]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        [Route("getallroles")]
        public async Task<IActionResult> GetAllRoles()
        {
            try
            {

                var roles = await roleRepository.GetAllRoles();
                if (roles == null)
                {
                    return NotFound();
                }
                return Ok(roles);

            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion

        #region Get Role By Id
        [HttpGet("{id}")]
        public Task<ActionResult<TblRole>> GetRoleById(int id)
        {
            try
            {
                var role = roleRepository.GetRoleById(id);
                if (role == null)
                {
                    return null;
                }
                return role;
            }

            catch (Exception)
            {
                return null;
            }
        }
        #endregion

        #region Add Role

        [HttpPost]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("addrole")]

        public async Task<IActionResult> AddRole([FromBody] TblRole role)
        {
            // check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var roleId = await roleRepository.AddRole(role);
                    if (roleId > 0)
                    {
                        return Ok(roleId);
                    }
                    else
                    {
                        return NotFound();
                    }

                }
                catch (Exception)
                {
                    return BadRequest();
                }

            }
            return BadRequest();
        }
        #endregion



        #region update Role

        [HttpPut]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("updateRole")]
        public async Task<IActionResult> UpdateRole([FromBody] TblRole role)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await roleRepository.UpdateRole(role);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
    
      #endregion
    }
}
