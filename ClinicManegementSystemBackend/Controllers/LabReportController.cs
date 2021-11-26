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
    public class LabReportController : ControllerBase
    {
        //Constructor Dependency Injection for LabReportRepository
        ILabReportRepository labRepository;
        public LabReportController(ILabReportRepository _p)
        {
            labRepository = _p;
        }

        #region Get Lab Reports
        [HttpGet]
        //[Route("GetLabReports")]
        public async Task<IActionResult> GetAllPosts()
        {
            try
            {
                var report = await labRepository.GetLabReports();
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


        #region Add Report
        [HttpPost]
        //checks for token
        //[Route("AddReport")]
        public async Task<IActionResult> AddClient([FromBody] TblLabReport model)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var reportId = await labRepository.AddReport(model);
                    if (reportId > 0)
                    {
                        return Ok(reportId);
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

        #region Update Report
        [HttpPut]
        //[Route("UpdateReport")]
        //[Authorize]
        public async Task<IActionResult> UpdateReport([FromBody] TblLabReport model)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await labRepository.UpdateReport(model);
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
