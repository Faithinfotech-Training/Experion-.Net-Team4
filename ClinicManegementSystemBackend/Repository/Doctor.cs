﻿using ClinicManegementSystemBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicManegementSystemBackend.Repository
{
    public class Doctor : IDoctor
    {
        ClinicManagementSystemContext db;
        //constructor dependency injection
        public Doctor(ClinicManagementSystemContext _db)
        {
            db = _db;
        }
        #region Add Doctor
        public async Task<int> AddDoctor(TblDoctor doctor)
        {
            if (db != null)
            {
                await db.TblDoctor.AddAsync(doctor);
                await db.SaveChangesAsync();
                return doctor.DoctorId;
            }
            return 0;
        }
        #endregion

        #region Get All Doctors
        public async Task<List<TblDoctor>> GetAllDoctors()
        {
            if (db != null)
            {
                return await db.TblDoctor.ToListAsync();
            }

            return null;
        }
        #endregion

        #region Get Doctor By ID
        public async Task<ActionResult<TblDoctor>> GetDoctorById(int doctorId)
        {
            if (db != null)
            {
                TblDoctor test = await db.TblDoctor.FirstOrDefaultAsync(em => em.DoctorId == doctorId);
                return test;
            }
            return null;
        }
        #endregion

        #region Get Doctor BY User ID
        public async Task<TblDoctor> GetDoctorByUserID(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from o in db.TblDoctor
                              where o.UserId == id
                              select new TblDoctor
                              {
                                  DoctorId = o.DoctorId,
                                  DoctorName = o.DoctorName,
                                  DoctorAddress = o.DoctorAddress,
                                  DoctorPhone = o.DoctorPhone,
                                  DoctorEmail = o.DoctorEmail,
                                  DoctorAge = o.DoctorAge,
                                  DoctorGender = o.DoctorGender,
                                  DoctorQualification = o.DoctorQualification,
                                  DoctorSpecialization = o.DoctorSpecialization,
                                  DoctorDateOfJoining = o.DoctorDateOfJoining,
                                  IsActive = o.IsActive,
                                  UserId = o.UserId
                              }).FirstOrDefaultAsync();
            }
            return null;
        }
        #endregion

        #region Update doctor

        public async Task<TblDoctor> UpdateDoctor(TblDoctor doctor)
        {
            if (db != null)
            {
                db.TblDoctor.Update(doctor);
                await db.SaveChangesAsync();
               return doctor;
            }
            return null;
        }

       
        #endregion
    }
}
