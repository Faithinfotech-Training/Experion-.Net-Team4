using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.ViewModel
{
    public class PrescriptionLabViewModel
    {
        public int PrescriptionId { get; set; }
        public int? PrescriptionNumber { get; set; }
        public int? PatientId { get; set; }
        public string PatientName { get; set; }
        public int? DoctorId { get; set; }
        public string DoctorName { get; set; }
        public DateTime? PrescriptionDate { get; set; }
    }
}
