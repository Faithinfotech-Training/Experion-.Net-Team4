using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.ViewModel
{
    public class UserViewModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public int? RoleId { get; set; }
        public string RoleName { get; set; }
        public bool? IsActive { get; set; }
    }
}
