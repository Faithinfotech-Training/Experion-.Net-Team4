using ClinicManegementSystemBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface ILogin
    {
        // get user details by using username and password
        public TblUser validateUser(string username, string password);
    }
}
