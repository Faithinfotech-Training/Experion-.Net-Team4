using ClinicManegementSystemBackend.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
   public interface IUserViewModelRepo
    {
        Task<List<UserViewModel>> GetUserDetails();
    }
}
