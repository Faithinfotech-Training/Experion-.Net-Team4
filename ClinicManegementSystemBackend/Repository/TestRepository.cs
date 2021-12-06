﻿using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class TestRepository : ITestRepository
    {
        //database connection
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public TestRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }

        #region Get Test By Report Id        
        public async Task<List<TblTest>> GetTestByReportId(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from t in db.TblTest                             
                              where t.ReportId == id
                              select new TblTest
                              {
                                  TestId = t.TestId,
                                  TestName =t.TestName,
                                  NormalRange = t.NormalRange,
                                  TestResult = t.TestResult,
                                  IsActive = t.IsActive,
                                  ReportId = t.ReportId,
                                  StaffId = t.StaffId

                              }).ToListAsync();
            }
            return null;
        }
        #endregion

        #region Add Test
        public async Task<int> AddTest(TblTest test)
        {
            if (db != null)
            {
                await db.TblTest.AddAsync(test);
                await db.SaveChangesAsync();
                return test.TestId;
            }
            return 0;
        }
        #endregion

        #region Get Test By ID        
        public async Task<ActionResult<TblTest>> GetTestById(int testId)
        {
            if (db != null)
            {
                TblTest test = await db.TblTest.FirstOrDefaultAsync(em => em.TestId == testId);
                return test;
            }
            return null;
        }
        #endregion

        #region Update Test
        public async Task UpdateTest(TblTest test)
        {
            if (db != null)
            {
                db.TblTest.Update(test);
                await db.SaveChangesAsync();    //Commit the transaction
            }
        }
        #endregion


    }
}
