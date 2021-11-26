using ClinicManegementSystemBackend.Models;
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
    public class PatientController : ControllerBase
    {
        //Constructor Dependency Injection for PatientRepository
        //1.Default constructor - PatientController
        //2.IPatientRepository

        IPatientRepository patientRepository;
        public PatientController(IPatientRepository _p)
        {
            patientRepository = _p;
        }

        //Register patient --post
        #region Register Patient
        [HttpPost]
        [Route("AddPatient")]
        public async Task<IActionResult> AddPatient([FromBody] TblPatient model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var patientId = await patientRepository.AddPatient(model);
                    if (patientId > 0)
                    {
                        return Ok(patientId);
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

        //Edit Patient --put
        #region Edit Patient
        [HttpPut]
        [Route("UpdatePatient")]
        public async Task<IActionResult> UpdatePatient([FromBody] TblPatient model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await patientRepository.UpdatePatient(model);
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
