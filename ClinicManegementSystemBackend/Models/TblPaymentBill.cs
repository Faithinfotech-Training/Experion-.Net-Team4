using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblPaymentBill
    {
        public int BillId { get; set; }
        public int? BillNumber { get; set; }
        public DateTime? BillDate { get; set; }
        public decimal? LabTestFee { get; set; }
        public decimal? DoctorConsulationFee { get; set; }
        public decimal? NursingFee { get; set; }
        public decimal? Amount { get; set; }
        public bool? IsActive { get; set; }
        public int? PatientId { get; set; }

        public virtual TblPatient Patient { get; set; }
    }
}
