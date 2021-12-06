using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class LabReportRepository : ILabReportRepository
    {
        //database/json
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public LabReportRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }


        #region Get By ID Report using ViewModel
        public async Task<LabReportViewModel> GetLabReportsById(int id)
        {
            if (db != null)
            {
                //LINQ
                //join post and category
                return await (from l in db.TblLabReport
                              from d in db.TblDoctor
                              from s in db.TblStaff
                              from p in db.TblPatient
                              where l.DoctorId == d.DoctorId
                              where l.StaffId == s.StaffId
                              where l.PatientId == p.PatientId
                              where l.ReportId == id
                              select new LabReportViewModel
                              {
                                  ReportId = l.ReportId,
                                  ReportNumber = l.ReportNumber,
                                  ReportDate = l.ReportDate,
                                  ReportNotes = l.ReportNotes,
                                  PatientId = l.PatientId,
                                  PatientName = p.PatientName,
                                  PatientEmail = p.PatientEmail,
                                  IsActive = l.IsActive,
                                  StaffId = l.StaffId,
                                  DoctorId = l.DoctorId,
                                  DoctorName = d.DoctorName,
                                  StaffName = s.StaffName
                              }
                              ).FirstOrDefaultAsync();
            }
            return null;
        }
        #endregion


        #region Get Report using ViewModel
        public async Task<List<LabReportViewModel>> GetLabReports()
        {         
            if (db != null)
            {
                //LINQ
                //join post and category
                return await (from l in db.TblLabReport
                              from d in db.TblDoctor
                              from s in db.TblStaff
                              from p in db.TblPatient
                              where l.DoctorId == d.DoctorId
                              where l.StaffId == s.StaffId
                              where l.PatientId == p.PatientId
                              select new LabReportViewModel
                              {
                                  ReportId = l.ReportId,
                                  ReportNumber = l.ReportNumber,
                                  ReportDate = l.ReportDate,
                                  ReportNotes = l.ReportNotes,
                                  PatientId = l.PatientId,
                                  PatientName = p.PatientName,
                                  IsActive = l.IsActive,
                                  StaffId = l.StaffId,
                                  DoctorId = l.DoctorId,
                                  DoctorName = d.DoctorName,
                                  StaffName = s.StaffName
                              }
                              ).ToListAsync();
            }
            return null;
        }
        #endregion

        #region Add Reports
        public async Task<int> AddReport(TblLabReport report)
        {
            if (db != null)
            {
                await db.TblLabReport.AddAsync(report);
                await db.SaveChangesAsync();
                return report.ReportId;
            }
            return 0;
        }
        #endregion

        #region Update Report

        public async Task UpdateReport(TblLabReport report)
        {
            if (db != null)
            {
                db.TblLabReport.Update(report);
                await db.SaveChangesAsync();    //Commit the transaction
            }
        }
        #endregion






    }
}
