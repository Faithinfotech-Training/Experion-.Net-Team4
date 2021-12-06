using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class PrescribedTest : IPrescribedTest
    {
        ClinicManagementSystemContext db;
        //constructor dependency injection
        public PrescribedTest(ClinicManagementSystemContext _db)
        {
            db = _db;
        }
        #region Add PrescribedTest
        public async Task<int> AddPrescribedTest(TblPrescribedTest prescribedTest)
        {
            if (db != null)
            {
                await db.TblPrescribedTest.AddAsync(prescribedTest);
                await db.SaveChangesAsync();
                return prescribedTest.PrescribedTestId;
            }
            return 0;
        }
        #endregion

        #region Get Prescribed Tests By prescriptionId
        public async Task<List<TblPrescribedTest>> GetPrescribedTestsByPrescriptionId(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from p in db.TblPrescribedTest
                              where p.PrescriptionId == id
                              select new TblPrescribedTest
                              {
                                  PrescribedTestId = p.PrescribedTestId,
                                  PrescribedTestName = p.PrescribedTestName,
                                  IsActive = p.IsActive,
                                  PrescriptionId=p.PrescriptionId                                  
                              }).ToListAsync();
            }
            return null;
        }

        #endregion

    }
}
