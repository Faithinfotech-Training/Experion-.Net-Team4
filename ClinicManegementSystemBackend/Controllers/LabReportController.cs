﻿using ClinicManegementSystemBackend.Models;
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
        public async Task<IActionResult> GetAllReports()
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

        #region Get Lab Report By ID
        [HttpGet("{id}")]
        //[Route("GetLabReports")]
        public async Task<IActionResult> GetReportByID(int id)
        {
            try
            {
                var report = await labRepository.GetLabReportsById(id);
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
        public async Task<IActionResult> AddReport(TblLabReport model)
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
