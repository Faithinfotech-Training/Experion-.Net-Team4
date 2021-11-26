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
    public class PrescribedTestController : ControllerBase
    {
        IPrescribedTest prescribedTestRepository;

        public PrescribedTestController(IPrescribedTest _pr)
        {
            prescribedTestRepository = _pr;
        }

        #region Add Prescribed Test

        [HttpPost]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("addprescribedtest")]

        public async Task<IActionResult> AddPrescribedTest([FromBody] TblPrescribedTest prescribedTest)
        {
            // check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var prescribedTestId = await prescribedTestRepository.AddPrescribedTest(prescribedTest);
                    if (prescribedTestId > 0)
                    {
                        return Ok(prescribedTestId);
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





        #region Get PrescriptionTest By PrescriptionId
        [HttpGet("GetPrescribedTestsByPrescriptionId/{id}")]
        public async Task<IActionResult> GetPrescribedTestsByPrescriptionId(int id)
        {
            try
            {
                var prescribedtest = await prescribedTestRepository.GetPrescribedTestsByPrescriptionId(id);
                if (prescribedtest == null)
                {
                    return NotFound();
                }
                return Ok(prescribedtest);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion
    }
}
