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
    public class ObservationsController : ControllerBase
    {
        //Constructor Dependency Injection for DoctorNotesRepository
        IDoctorNotesRepository doctorNotesRepository;
        public ObservationsController(IDoctorNotesRepository _p)
        {
            doctorNotesRepository = _p;
        }

        #region Get Notes By Patient Id
        [HttpGet("{id}")]
        public async Task<ActionResult> GetNoteByPatientId(int id)
        {
            try
            {
                var notes = await doctorNotesRepository.GetNotesByPatientId(id);
                if (notes == null)
                {
                    return NotFound();
                }
                return Ok(notes);
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        #endregion

        

        #region Add Notes
        [HttpPost]
        //checks for token
        //[Route("AddPrescription")]
        public async Task<IActionResult> AddNote([FromBody] TblObservation model)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var noteId = await doctorNotesRepository.AddNotes(model);
                    if (noteId > 0)
                    {
                        return Ok(noteId);
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




    }
}
