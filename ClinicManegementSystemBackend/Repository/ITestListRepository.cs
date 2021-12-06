using ClinicManegementSystemBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface ITestListRepository
    {
        //get all tests
        #region get  testlist
        Task<List<TblTestList>> GetTestList();
        #endregion

        //add a test
        #region  add tests
        Task<int> AddTestList(TblTestList tests);
        #endregion
    }
}
