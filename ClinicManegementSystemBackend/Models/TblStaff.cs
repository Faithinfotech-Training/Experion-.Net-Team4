using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblStaff
    {
        public TblStaff()
        {
            TblLabReport = new HashSet<TblLabReport>();
            TblTest = new HashSet<TblTest>();
        }

        public int StaffId { get; set; }
        public string StaffName { get; set; }
        public string StaffAddress { get; set; }
        public string StaffPhone { get; set; }
        public string StaffEmail { get; set; }
        public int? StaffAge { get; set; }
        public string StaffGender { get; set; }
        public string StaffQualification { get; set; }
        public DateTime? StaffDateOfJoining { get; set; }
        public bool? IsActive { get; set; }
        public int? UserId { get; set; }

        public virtual TblUser User { get; set; }
        public virtual ICollection<TblLabReport> TblLabReport { get; set; }
        public virtual ICollection<TblTest> TblTest { get; set; }
    }
}
