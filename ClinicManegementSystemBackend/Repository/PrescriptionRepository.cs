using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class PrescriptionRepository : IPrescriptionRepository
    {
        //database/json
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public PrescriptionRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }

        #region Get Test in prescription using ViewModel
        public async Task<List<PrescriptionLabViewModel>> GetPrescription()
        {
            if (db != null)
            {
                //LINQ
                return await (from p in db.TblPrescription
                              from d in db.TblDoctor
                              from s in db.TblPatient
                              where p.DoctorId == d.DoctorId
                              where p.PatientId == s.PatientId
                              select new PrescriptionLabViewModel
                              {
                                  PrescriptionId = p.PrescriptionId,
                                  PrescriptionNumber = p.PrescriptionNumber,
                                  PatientId = p.PatientId,
                                  PatientName = s.PatientName,
                                  DoctorId = p.DoctorId,
                                  DoctorName = d.DoctorName,
                                  PrescriptionDate = p.PrescriptionDate
                              }
                              ).ToListAsync();
            }
            return null;
        }
        #endregion

        #region Add Prescription
        public async Task<int> AddPrescription(TblPrescription prescription)
        {
            if (db != null)
            {
                await db.TblPrescription.AddAsync(prescription);
                await db.SaveChangesAsync();
                return prescription.PrescriptionId;
            }
            return 0;
        }
        #endregion

        #region Update Prescription

        public async Task UpdatePrescription(TblPrescription prescription)
        {
            if (db != null)
            {
                db.TblPrescription.Update(prescription);
                await db.SaveChangesAsync();    //Commit the transaction
            }
        }
        #endregion

    }
}
