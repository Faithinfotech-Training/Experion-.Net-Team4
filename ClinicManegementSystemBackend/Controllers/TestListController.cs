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
    public class TestListController : ControllerBase
    {
        //Constructor Dependency Injection for TestListRepository
        //1.Default constructor - TestListController
        //2.ITestListRepository

        ITestListRepository testListRepository;
        public TestListController(ITestListRepository _p)
        {
            testListRepository = _p;
        }

        //add a test to the test list
        #region add test to the list
        [HttpPost]
        //[Route("AddTest")]
        public async Task<IActionResult> AddTestList([FromBody] TblTestList model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var testId = await testListRepository.AddTestList(model);
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

        //get all test from the test list
        #region get all test from the test list
        [HttpGet]
        //[Route("GetAllTests")]
        public async Task<IActionResult> GetTestList()
        {
            try
            {
                var tests = await testListRepository.GetTestList();
                if (tests == null)
                {
                    return NotFound();
                }
                return Ok(tests);
            }
            catch (Exception)
            {
                return BadRequest();

            }
        }

        #endregion
    }
}
