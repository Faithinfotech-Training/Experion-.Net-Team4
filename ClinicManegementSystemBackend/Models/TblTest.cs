using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblTest
    {
        public int TestId { get; set; }
        public string TestName { get; set; }
        public string NormalRange { get; set; }
        public string TestResult { get; set; }
        public bool? IsActive { get; set; }
        public int? ReportId { get; set; }
        public int? StaffId { get; set; }

        public virtual TblLabReport Report { get; set; }
        public virtual TblStaff Staff { get; set; }
    }
}
