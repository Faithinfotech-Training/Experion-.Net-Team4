using ClinicManegementSystemBackend.Repository;
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
    public class UserViewModelController : ControllerBase
    {
        IUserViewModelRepo viewModelRepository;

        public UserViewModelController(IUserViewModelRepo _v)
        {
            viewModelRepository = _v;
        }
        #region Get User Details
        [HttpGet]
        [Route("GetUserDetails")]
        public async Task<IActionResult> GetUserDetails()
        {
            try
            {
                var details = await viewModelRepository.GetUserDetails();
                if (details == null)
                {
                    return NotFound();
                }
                return Ok(details);

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        #endregion
    }
}
