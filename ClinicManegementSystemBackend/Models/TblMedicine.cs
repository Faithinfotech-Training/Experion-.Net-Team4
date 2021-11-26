using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblMedicine
    {
        public int MedicineId { get; set; }
        public string MedicineName { get; set; }
        public string Dosage { get; set; }
        public bool? IsActive { get; set; }
        public int? PrescriptionId { get; set; }

        public virtual TblPrescription Prescription { get; set; }
    }
}
