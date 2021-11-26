using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblPrescribedTest
    {
        public int PrescribedTestId { get; set; }
        public string PrescribedTestName { get; set; }
        public bool? IsActive { get; set; }
        public int? PrescriptionId { get; set; }

        public virtual TblPrescription Prescription { get; set; }
    }
}
