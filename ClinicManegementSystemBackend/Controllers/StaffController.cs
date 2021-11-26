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
    public class StaffController : ControllerBase
    {
        IStaff staffRepository;

        public StaffController(IStaff _sr)
        {
            staffRepository = _sr;
        }

        #region get staff
        [HttpGet]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        [Route("getallstaff")]
        public async Task<IActionResult> GetAllStaff()
        {
            try
            {

                var staffs = await staffRepository.GetAllStaff();
                if (staffs == null)
                {
                    return NotFound();
                }
                return Ok(staffs);

            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion

        #region Get Staff By Id
        [HttpGet("{id}")]
        public Task<ActionResult<TblStaff>> GetStaffById(int id)
        {
            try
            {
                var staff = staffRepository.GetStaffById(id);
                if (staff == null)
                {
                    return null;
                }
                return staff;
            }

            catch (Exception)
            {
                return null;
            }
        }
        #endregion

        #region Add Staff

        [HttpPost]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("addstaff")]

        public async Task<IActionResult> AddStaff([FromBody] TblStaff staff)
        {
            // check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var staffId = await staffRepository.AddStaff(staff);
                    if (staffId > 0)
                    {
                        return Ok(staffId);
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



        #region update Staff


        [HttpPut]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("updatestaff")]

        public async Task<IActionResult> UpdateBook([FromBody] TblStaff staff)
        {
            // check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var staffId = await staffRepository.UpdateStaff(staff);
                    if (staffId > 0)
                    {
                        return Ok(staffId);
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
    }
}
