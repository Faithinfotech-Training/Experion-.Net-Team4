using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
   public interface IPrescribedTest
    {
        //get prescribedtest by prescriptionid
        public Task<ActionResult<TblPrescribedTest>> GetPrescribedTestsByPrescriptionId(int prescriptionId);

        //add prescribed test
        public Task<int> AddPrescribedTest(TblPrescribedTest prescribedTest);
    }
}
