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
    public class TestController : ControllerBase
    {
        //Constructor Dependency Injection for LabReportRepository
        ITestRepository testRepository;
        public TestController(ITestRepository _p)
        {
            testRepository = _p;
        }


        #region Get Test By Id 
        [HttpGet("{id}")]
        public Task<ActionResult<TblTest>> GetTestById(int id)
        {
            try
            {
                var test = testRepository.GetTestById(id);
                if (test == null)
                {
                    return null;
                }
                return test;
            }

            catch (Exception)
            {

                return null;
            }
        }
        #endregion

        #region Add Test
        [HttpPost]
        //checks for token
        //[Route("AddPrescription")]
        public async Task<IActionResult> AddTest([FromBody] TblTest model)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var testId = await testRepository.AddTest(model);
                    if (testId > 0)
                    {
                        return Ok(testId);
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

        #region Update Test
        [HttpPut]
        //[Route("UpdateReport")]
        //[Authorize]
        public async Task<IActionResult> UpdatePrescription([FromBody] TblTest model)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await testRepository.UpdateTest(model);
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

        #region Get Test By Report Id 
        [HttpGet("GetTestByReportId/{id}")]
        public async Task<IActionResult> GetTestByReportId(int id)
        {
            try
            {
                var report = await testRepository.GetTestByReportId(id);
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
    }
}
