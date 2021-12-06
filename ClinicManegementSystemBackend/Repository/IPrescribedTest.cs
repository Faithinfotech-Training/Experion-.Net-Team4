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
        Task<List<TblPrescribedTest>> GetPrescribedTestsByPrescriptionId(int id);

        //add prescribed test
        public Task<int> AddPrescribedTest(TblPrescribedTest prescribedTest);
    }
}
