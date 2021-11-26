using ClinicManegementSystemBackend.Models;
using ClinicManegementSystemBackend.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        //Constructor Dependency Injection for MedicineRepository
        //1.Default constructor - MedicineController
        //2.IMedicineRepository

        IMedicineRepository medicineRepository;
        public MedicineController(IMedicineRepository _p)
        {
            medicineRepository = _p;
        }
        //add medicine
        #region add medicine
        [HttpPost]
        [Route("AddMedicine")]
        public async Task<IActionResult> AddMedicine([FromBody] TblMedicine model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var medicineId = await medicineRepository.AddMedicine(model);
                    if (medicineId > 0)
                    {
                        return Ok(medicineId);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion

        //update medicine
        #region update medicine
        [HttpPut]
        [Route("UpdateMedicine")]
        public async Task<IActionResult> UpdateMedicine([FromBody] TblMedicine model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await medicineRepository.UpdateMedicine(model);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion

        //get medicine details
        #region get medicine details
        [HttpGet]
        [Route("GetMedicine")]
        public async Task<IActionResult> GetMedicine()
        {
            try
            {
                var medicine = await medicineRepository.GetMedicine();
                if (medicine == null)
                {
                    return NotFound();
                }
                return Ok(medicine);
            }
            catch (Exception)
            {
                return BadRequest();

            }
        }
        #endregion

        //get medicine details by id
        #region get medicine by id
        [HttpGet]
        [Route("GetMedicineById")]
        public async Task<IActionResult> GetMedicineById(int id)
        {
            try
            {
                var medicine = await medicineRepository.GetMedicineById(id);
                if (medicine == null)
                {
                    return NotFound();
                }
                return Ok(medicine);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion
    }
}
