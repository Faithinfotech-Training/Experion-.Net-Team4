using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface ILabReportRepository
    {
        Task<List<LabReportViewModel>> GetLabReports();
        Task<LabReportViewModel> GetLabReportsById(int id);
        Task<int> AddReport(TblLabReport report);
        Task UpdateReport(TblLabReport report);

    }
}
