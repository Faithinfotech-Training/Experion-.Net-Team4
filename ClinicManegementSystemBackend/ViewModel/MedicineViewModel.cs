using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.ViewModel
{
    public class MedicineViewModel
    {
        public int MedicineId { get; set; }
        public string MedicineName { get; set; }
        public string Dosage { get; set; }
        public bool? IsActive { get; set; }
        public int? PrescriptionId { get; set; }
        public int? PrescriptionNumber { get; set; }
    }
}
