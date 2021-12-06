using System;
using System.Collections.Generic;

namespace ClinicManegementSystemBackend.Models
{
    public partial class TblEvents
    {
        public int EventId { get; set; }
        public string EventName { get; set; }
        public string EventDescription { get; set; }
        public string EventImage { get; set; }
    }
}
