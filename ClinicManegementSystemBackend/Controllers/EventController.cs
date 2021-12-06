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
    public class EventController : ControllerBase
    {
        //Constructor Dependency Injection for EventRepository
        //1.Default constructor - EventController
        //2.IEventRepository

        IEventRepository eventRepository;
        public EventController(IEventRepository _p)
        {
            eventRepository = _p;
        }

        //add an event
        #region add event
        [HttpPost]
        [Route("AddEvent")]
        public async Task<IActionResult> AddEvent([FromBody] TblEvents model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var eventId = await eventRepository.AddEvent(model);
                    if (eventId > 0)
                    {
                        return Ok(eventId);
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

        //update an event
        #region update an event
        [HttpPut]
        [Route("UpdateEvent")]
        public async Task<IActionResult> UpdateEvent([FromBody] TblEvents model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await eventRepository.UpdateEvent(model);
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

        //get all events
        #region get all events
        [HttpGet]
        //[Route("GetEvent")]
        public async Task<IActionResult> GetEvent()
        {
            try
            {
                var events = await eventRepository.GetEvent();
                if (events == null)
                {
                    return NotFound();
                }
                return Ok(events);
            }
            catch (Exception)
            {
                return BadRequest();

            }
        }
        #endregion

        //get an event by id
        #region get event by id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEventById(int id)
        {
            try
            {
                var events = await eventRepository.GetEventById(id);
                if (events == null)
                {
                    return NotFound();
                }

                return Ok(events);
            }
            catch (Exception)
            {
                return BadRequest();

            }
        }
        #endregion

        //delete event
        #region delete
        [HttpDelete]
        [Route("DeleteEvent")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            try
            {
                var evt = await eventRepository.DeleteEvent(id);
                if (evt == null)
                {
                    return NotFound();
                }
                return Ok(evt);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        #endregion
    }
}
