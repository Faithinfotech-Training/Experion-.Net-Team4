﻿using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblObservation
    {
        public int ObservationId { get; set; }
        public string Observation { get; set; }
        public string DoctorNotes { get; set; }
        public bool? IsActive { get; set; }
        public int? DoctorId { get; set; }

        public virtual TblDoctor Doctor { get; set; }
    }
}
