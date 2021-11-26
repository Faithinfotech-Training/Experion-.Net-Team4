using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblAppointment
    {
        public int AppointmentId { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public TimeSpan? AppointmentTime { get; set; }
        public bool? IsActive { get; set; }
        public int? PatientId { get; set; }
        public int? DoctorId { get; set; }

        public virtual TblDoctor Doctor { get; set; }
        public virtual TblPatient Patient { get; set; }
    }
}
