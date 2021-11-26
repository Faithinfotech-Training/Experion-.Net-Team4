using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface ITestRepository
    {

        Task<List<TblTest>> GetTests();
        Task UpdateTest(TblTest prescription);
        Task<int> AddTest(TblTest prescription);
        Task<TblTest> GetTestByReportId(int id);
        Task<ActionResult<TblTest>> GetTestById(int testId);
    }
}
