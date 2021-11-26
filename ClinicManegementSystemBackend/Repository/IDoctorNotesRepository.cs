using ClinicManegementSystemBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface IDoctorNotesRepository
    {
        Task<int> AddNotes(TblObservation notes);
        Task<TblObservation> GetNotesByPatientId(int id);
    }
}
