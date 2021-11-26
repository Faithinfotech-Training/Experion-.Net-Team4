using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface IPrescriptionRepository
    {
        Task<List<PrescriptionLabViewModel>> GetPrescription();
        Task UpdateReport(TblPrescription prescription);
        Task<int> AddPrescription(TblPrescription prescription);
    }
}
