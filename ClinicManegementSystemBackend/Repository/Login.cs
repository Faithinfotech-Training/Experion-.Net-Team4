using ClinicManegementSystemBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class Login :ILogin
    {
        ClinicManagementSystemContext _db;

        public Login(ClinicManagementSystemContext db)
        {
            _db = db;
        }


        // get user details by using username and password
        public TblUser validateUser(string username, string password)
        {
            if (_db != null)
            {
                TblUser dbuser = _db.TblUser.FirstOrDefault(em => em.UserName == username && em.UserPassword == password);
                if (dbuser != null)
                {
                    return dbuser;
                }
            }
            return null;

        }
    }
}

    
