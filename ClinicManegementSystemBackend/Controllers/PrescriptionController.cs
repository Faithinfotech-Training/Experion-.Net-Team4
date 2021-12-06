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
    public class PrescriptionController : ControllerBase
    {
        //Constructor Dependency Injection for LabReportRepository
        IPrescriptionRepository prescriptionRepository;
        public PrescriptionController(IPrescriptionRepository _p)
        {
            prescriptionRepository = _p;
        }


        #region Get Prescription Details 
        [HttpGet]        
        public async Task<IActionResult> GetAllPrescription()
        {
            try
            {
                var report = await prescriptionRepository.GetPrescription();
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

        #region Add Prescription
        [HttpPost]
        //checks for token
       
        public async Task<IActionResult> AddPrescription([FromBody] TblPrescription model)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var prescriptionId = await prescriptionRepository.AddPrescription(model);
                    if (prescriptionId > 0)
                    {
                        return Ok(prescriptionId);
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

        #region Update Prescription
        [HttpPut]
        //[Route("UpdateReport")]
        //[Authorize]
        public async Task<IActionResult> UpdatePrescription([FromBody] TblPrescription model)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await prescriptionRepository.UpdatePrescription(model);
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
