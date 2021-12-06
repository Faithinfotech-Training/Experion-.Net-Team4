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
    public class DoctorController : ControllerBase
    {
        IDoctor doctorRepository;

        public DoctorController(IDoctor _dr)
        {
            doctorRepository = _dr;
        }

        #region get doctors
        [HttpGet]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        [Route("getalldoctors")]
        public async Task<IActionResult> GetAllDoctors()
        {
            try
            {

                var doctors = await doctorRepository.GetAllDoctors();
                if (doctors == null)
                {
                    return NotFound();
                }
                return Ok(doctors);

            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion

        #region Get Doctor By Id
        [HttpGet("{id}")]
        public Task<ActionResult<TblDoctor>> GetDoctorById(int id)
        {
            try
            {
                var doctor = doctorRepository.GetDoctorById(id);
                if (doctor == null)
                {
                    return null;
                }
                return doctor;
            }

            catch (Exception)
            {
                return null;
            }
        }
        #endregion

        #region Get Doctor By UserID        
        [HttpGet("getdoctorbyuserid/{id}")]
       
        public async Task<IActionResult> GetDoctorByID(int id)
        {
            try
            {
                var report = await doctorRepository.GetDoctorByUserID(id);
                if (report == null)
                {
                    return NotFound();
                }
                return Ok(report);
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        #endregion
        

        #region Add doctor

        [HttpPost]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("adddoctor")]

        public async Task<IActionResult> AddDoctor([FromBody] TblDoctor doctor)
        {
            // check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var doctorId = await doctorRepository.AddDoctor(doctor);
                    if (doctorId > 0)
                    {
                        return Ok(doctorId);
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

        #region update Doctor

        [HttpPut]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("updateDoctor")]
        public async Task<IActionResult> UpdateDoctor([FromBody] TblDoctor model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await doctorRepository.UpdateDoctor(model);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        /*
        [HttpPut]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("updatedoctor")]

        
        public async Task<IActionResult> UpdateDoctor([FromBody] TblDoctor doctor)
        {
            // check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var doctorId = await doctorRepository.UpdateDoctor(doctor);
                    if (doctorId > 0)
                    {
                        return Ok(doctorId);
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
        }*/

        #endregion
    }
}
