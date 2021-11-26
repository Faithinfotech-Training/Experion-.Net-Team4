using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblDoctor
    {
        public TblDoctor()
        {
            TblAppointment = new HashSet<TblAppointment>();
            TblLabReport = new HashSet<TblLabReport>();
            TblObservation = new HashSet<TblObservation>();
            TblPatient = new HashSet<TblPatient>();
            TblPrescription = new HashSet<TblPrescription>();
        }

        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public string DoctorAddress { get; set; }
        public string DoctorPhone { get; set; }
        public string DoctorEmail { get; set; }
        public int? DoctorAge { get; set; }
        public string DoctorGender { get; set; }
        public string DoctorQualification { get; set; }
        public string DoctorSpecialization { get; set; }
        public DateTime? DoctorDateOfJoining { get; set; }
        public bool? IsActive { get; set; }
        public int? UserId { get; set; }

        public virtual TblUser User { get; set; }
        public virtual ICollection<TblAppointment> TblAppointment { get; set; }
        public virtual ICollection<TblLabReport> TblLabReport { get; set; }
        public virtual ICollection<TblObservation> TblObservation { get; set; }
        public virtual ICollection<TblPatient> TblPatient { get; set; }
        public virtual ICollection<TblPrescription> TblPrescription { get; set; }
    }
}
