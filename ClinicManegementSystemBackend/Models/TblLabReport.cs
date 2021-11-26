using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblLabReport
    {
        public TblLabReport()
        {
            TblTest = new HashSet<TblTest>();
        }

        public int ReportId { get; set; }
        public int? ReportNumber { get; set; }
        public DateTime? ReportDate { get; set; }
        public string ReportNotes { get; set; }
        public int? PatientId { get; set; }
        public bool? IsActive { get; set; }
        public int? StaffId { get; set; }
        public int? DoctorId { get; set; }

        public virtual TblDoctor Doctor { get; set; }
        public virtual TblPatient Patient { get; set; }
        public virtual TblStaff Staff { get; set; }
        public virtual ICollection<TblTest> TblTest { get; set; }
    }
}
