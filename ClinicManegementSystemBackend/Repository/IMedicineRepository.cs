using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface IMedicineRepository
    {
        //add medicine
        #region add medicine
        Task<int> AddMedicine(TblMedicine medicine);
        #endregion

        //update medicine
        #region update medicine
        Task UpdateMedicine(TblMedicine medicine);
        #endregion

        //get medicine
        #region get medicine
        Task<List<MedicineViewModel>> GetMedicine();
        #endregion

        //get medicine by id
        #region get medicine by id
        Task<MedicineViewModel> GetMedicineById(int id);
        #endregion
    }
}
