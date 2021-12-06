using ClinicManegementSystemBackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class TestListRepository :ITestListRepository
    {
        //database/json
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public TestListRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }

        //add a test to the test list
        #region add test to a test list
        public async Task<int> AddTestList(TblTestList tests)
        {        
                if (db != null)
                {
                    await db.TblTestList.AddAsync(tests);
                    await db.SaveChangesAsync();//commit the transaction
                    return tests.TestId;
                }
                return 0;
           
        }
        #endregion

        //get test list
        #region get test list
        public async Task<List<TblTestList>> GetTestList()
        {
            if (db != null)
            {
                return await db.TblTestList.ToListAsync();
            }
            return null;
        }
        #endregion
    }
}
