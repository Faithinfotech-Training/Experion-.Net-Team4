using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblPrescription
    {
        public TblPrescription()
        {
            TblMedicine = new HashSet<TblMedicine>();
            TblPrescribedTest = new HashSet<TblPrescribedTest>();
        }

        public int PrescriptionId { get; set; }
        public int? PrescriptionNumber { get; set; }
        public DateTime? PrescriptionDate { get; set; }
        public bool? IsActive { get; set; }
        public int? PatientId { get; set; }
        public int? DoctorId { get; set; }

        public virtual TblDoctor Doctor { get; set; }
        public virtual TblPatient Patient { get; set; }
        public virtual ICollection<TblMedicine> TblMedicine { get; set; }
        public virtual ICollection<TblPrescribedTest> TblPrescribedTest { get; set; }
    }
}
