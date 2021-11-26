using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblPatient
    {
        public TblPatient()
        {
            TblAppointment = new HashSet<TblAppointment>();
            TblLabReport = new HashSet<TblLabReport>();
            TblObservation = new HashSet<TblObservation>();
            TblPaymentBill = new HashSet<TblPaymentBill>();
            TblPrescription = new HashSet<TblPrescription>();
        }

        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public int? PatientAge { get; set; }
        public string PatientGender { get; set; }
        public string BloodGroup { get; set; }
        public string PatientAddress { get; set; }
        public string PatientPhone { get; set; }
        public string EmergencyContact { get; set; }
        public string PatientEmail { get; set; }
        public bool? IsActive { get; set; }
        public int? DoctorId { get; set; }

        public virtual TblDoctor Doctor { get; set; }
        public virtual ICollection<TblAppointment> TblAppointment { get; set; }
        public virtual ICollection<TblLabReport> TblLabReport { get; set; }
        public virtual ICollection<TblObservation> TblObservation { get; set; }
        public virtual ICollection<TblPaymentBill> TblPaymentBill { get; set; }
        public virtual ICollection<TblPrescription> TblPrescription { get; set; }
    }
}
