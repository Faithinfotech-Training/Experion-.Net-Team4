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

        //Get Methods For Patient
        #region Get All Patients
        [HttpGet]
        //[Route("GetPatients")]
        public async Task<IActionResult> GetHobbies()
        {
            try
            {
                var patients = await patientRepository.GetPatients();
                if (patients == null)
                {
                    return NotFound();
                }
                return Ok(patients);
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        #endregion

        #region Get Test By Doctor Id 
        [HttpGet("GetPatientByDoctorId/{id}")]
        public async Task<IActionResult> GetPatientByDoctorId(int id)
        {
            try
            {
                var patient = await patientRepository.GetPatientByDoctorId(id);
                if (patient == null)
                {
                    return NotFound();
                }
                return Ok(patient);
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        #endregion

        #region Get Patient By Id 
        [HttpGet("{id}")]
        public Task<ActionResult<TblPatient>> GetTestById(int id)
        {
            try
            {
                var patient = patientRepository.GetPatientById(id);
                if (patient == null)
                {
                    return null;
                }
                return patient;
            }

            catch (Exception)
            {

                return null;
            }
        }
        #endregion





    }
}
