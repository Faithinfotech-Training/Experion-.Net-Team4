using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.ViewModel
{
    public class PaymentBillViewModel
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
        public string PatientName { get; set; }
        public string PatientPhone { get; set; }
        public string PatientEmail { get; set; }

    }
}
