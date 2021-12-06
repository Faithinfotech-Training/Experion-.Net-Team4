using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblTestList
    {
        public int TestId { get; set; }
        public string TestName { get; set; }
        public string NormalRange { get; set; }
        public bool? IsActive { get; set; }
    }
}
