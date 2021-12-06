using ClinicManegementSystemBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public interface IEventRepository
    {
        //add events
        #region  add events
        Task<int> AddEvent(TblEvents events);
        #endregion

        //update events
        #region update events
        Task UpdateEvent(TblEvents events);
        #endregion

        //get all events
        #region get  events
        Task<List<TblEvents>> GetEvent();
        #endregion

        //get event by id
        #region get event by id
        Task<TblEvents> GetEventById(int id);
        #endregion

        //delete event
        #region delete event
        Task<TblEvents> DeleteEvent(int id);
        #endregion
    }
}
