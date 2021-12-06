using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        IUserRepository userRepository;

        public UserController(IUserRepository _ur)
        {
            userRepository = _ur;
        }

        #region get users
        [HttpGet]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        [Route("getallusers")]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {

                var users = await userRepository.GetAllUsers();
                if (users == null)
                {
                    return NotFound();
                }
                return Ok(users);

            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion

        #region Get User By Id
        [HttpGet("{id}")]
        public Task<ActionResult<TblUser>> GetUserById(int id)
        {
            try
            {
                var user = userRepository.GetUserById(id);
                if (user == null)
                {
                    return null;
                }
                return user;
            }

            catch (Exception)
            {
                return null;
            }
        }
        #endregion

        #region Add user

        [HttpPost]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("adduser")]

        public async Task<IActionResult> AddUser([FromBody] TblUser user)
        {
            // check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var userId = await userRepository.AddUser(user);
                    if (userId > 0)
                    {
                        return Ok(userId);
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



        #region update user

        [HttpPut]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("updateUser")]
        public async Task<IActionResult> UpdateUser([FromBody] TblUser model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await userRepository.UpdateUser(model);
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
