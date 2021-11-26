using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class MedicineRepository : IMedicineRepository
    {
        //database/json
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public MedicineRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }

        //add medicine details
        #region add medicine details
        public async Task<int> AddMedicine(TblMedicine medicine)
        {
            if (db != null)
            {
                await db.TblMedicine.AddAsync(medicine);
                await db.SaveChangesAsync();//commit the transaction
                return medicine.MedicineId;
            }
            return 0;
        }
        #endregion

        //get medicine details
        #region get medicine details
        public async Task<List<MedicineViewModel>> GetMedicine()
        {
            if (db != null)
            {
                //LINQ
                return await(from m in db.TblMedicine
                             from p in db.TblPrescription
                             where m.PrescriptionId == p.PrescriptionId
                             select new MedicineViewModel
                             {
                                 MedicineId =m.MedicineId,
                                 MedicineName =m.MedicineName,
                                 Dosage=m.Dosage,
                                 PrescriptionId=m.PrescriptionId,
                                 PrescriptionNumber=p.PrescriptionNumber,
                                 IsActive = m.IsActive
                             }
                             ).ToListAsync();
            }
            return null;
        }
        #endregion

        //get medicine details by id
        #region get medicine details by id
        public async Task<MedicineViewModel> GetMedicineById(int id)
        {
            if (db != null)
            {
                //LINQ
                //join payment bill and patient
                return await(from m in db.TblMedicine
                             from p in db.TblPrescription
                             where m.PrescriptionId == id && m.PrescriptionId == p.PrescriptionId
                             select new MedicineViewModel
                             {
                                 MedicineId = m.MedicineId,
                                 MedicineName = m.MedicineName,
                                 Dosage = m.Dosage,
                                 PrescriptionId = m.PrescriptionId,
                                 PrescriptionNumber = p.PrescriptionNumber,
                                 IsActive = m.IsActive

                             }).FirstOrDefaultAsync();
            }
            return null;
        }
        #endregion

        //update medicine details
        #region update medicine details
        public async Task UpdateMedicine(TblMedicine medicine)
        {
            if (db != null)
            {
                db.TblMedicine.Update(medicine);
                await db.SaveChangesAsync();//commit the transaction

            }
        }
        #endregion
    }
}
