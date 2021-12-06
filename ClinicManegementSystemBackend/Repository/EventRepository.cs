using ClinicManegementSystemBackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class EventRepository : IEventRepository
    {
        //database/json
        ClinicManagementSystemContext db;

        //Constructor dependency injection
        public EventRepository(ClinicManagementSystemContext _db)
        {
            db = _db;
        }

        #region add event
        public async Task<int> AddEvent(TblEvents events)
        {
            if (db != null)
            {
                await db.TblEvents.AddAsync(events);
                await db.SaveChangesAsync();//commit the transaction
                return events.EventId;
            }
            return 0;

        }  
        #endregion

        #region get event
        public async Task<List<TblEvents>> GetEvent()
        {
            if (db != null)
            {
                return await db.TblEvents.ToListAsync();
            }
            return null;
        }
        #endregion

        #region get event by id
        public async Task<TblEvents> GetEventById(int id)
        {

            if (db != null)
            {
                TblEvents events = await db.TblEvents.FindAsync(id);
                return events;

            }
            return null;
        }
        #endregion

        #region update event
        public async Task UpdateEvent(TblEvents events)
        {
            if (db != null)
            {
                db.TblEvents.Update(events);
                await db.SaveChangesAsync();//commit the transaction

            }

        }
        #endregion

        #region delete event
        public async Task<TblEvents> DeleteEvent(int id)
        {
            if (db != null)
            {
                TblEvents dbevt = db.TblEvents.Find(id);
                db.TblEvents.Remove(dbevt);
                await db.SaveChangesAsync();
                return (dbevt);
            }

            return null;
        }
        #endregion
    }
}
