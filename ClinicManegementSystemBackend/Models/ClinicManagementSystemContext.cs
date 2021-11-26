using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ClinicManegementSystemBackend.Models
{
    public partial class ClinicManagementSystemContext : DbContext
    {
        public ClinicManagementSystemContext()
        {
        }

        public ClinicManagementSystemContext(DbContextOptions<ClinicManagementSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblAppointment> TblAppointment { get; set; }
        public virtual DbSet<TblDoctor> TblDoctor { get; set; }
        public virtual DbSet<TblLabReport> TblLabReport { get; set; }
        public virtual DbSet<TblMedicine> TblMedicine { get; set; }
        public virtual DbSet<TblObservation> TblObservation { get; set; }
        public virtual DbSet<TblPatient> TblPatient { get; set; }
        public virtual DbSet<TblPaymentBill> TblPaymentBill { get; set; }
        public virtual DbSet<TblPrescribedTest> TblPrescribedTest { get; set; }
        public virtual DbSet<TblPrescription> TblPrescription { get; set; }
        public virtual DbSet<TblRole> TblRole { get; set; }
        public virtual DbSet<TblStaff> TblStaff { get; set; }
        public virtual DbSet<TblTest> TblTest { get; set; }
        public virtual DbSet<TblUser> TblUser { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=MALAVIKAKNAIR\\SQLEXPRESS; Initial Catalog=ClinicManagementSystem; Integrated security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblAppointment>(entity =>
            {
                entity.HasKey(e => e.AppointmentId)
                    .HasName("PK__TblAppoi__8ECDFCC2A9DF4A2B");

                entity.Property(e => e.AppointmentDate).HasColumnType("date");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.TblAppointment)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__TblAppoin__Docto__32E0915F");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.TblAppointment)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__TblAppoin__Patie__31EC6D26");
            });

            modelBuilder.Entity<TblDoctor>(entity =>
            {
                entity.HasKey(e => e.DoctorId)
                    .HasName("PK__TblDocto__2DC00EBFB8AE2EA1");

                entity.Property(e => e.DoctorAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorDateOfJoining).HasColumnType("date");

                entity.Property(e => e.DoctorEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorGender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorPhone)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorQualification)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorSpecialization)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblDoctor)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__TblDoctor__UserI__29572725");
            });

            modelBuilder.Entity<TblLabReport>(entity =>
            {
                entity.HasKey(e => e.ReportId)
                    .HasName("PK__TblLabRe__D5BD480568D6880D");

                entity.Property(e => e.ReportDate).HasColumnType("date");

                entity.Property(e => e.ReportNotes)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.TblLabReport)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__TblLabRep__Docto__412EB0B6");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.TblLabReport)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__TblLabRep__Patie__3F466844");

                entity.HasOne(d => d.Staff)
                    .WithMany(p => p.TblLabReport)
                    .HasForeignKey(d => d.StaffId)
                    .HasConstraintName("FK__TblLabRep__Staff__403A8C7D");
            });

            modelBuilder.Entity<TblMedicine>(entity =>
            {
                entity.HasKey(e => e.MedicineId)
                    .HasName("PK__TblMedic__4F21289028FBD120");

                entity.Property(e => e.Dosage)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.MedicineName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Prescription)
                    .WithMany(p => p.TblMedicine)
                    .HasForeignKey(d => d.PrescriptionId)
                    .HasConstraintName("FK__TblMedici__Presc__398D8EEE");
            });

            modelBuilder.Entity<TblObservation>(entity =>
            {
                entity.HasKey(e => e.ObservationId)
                    .HasName("PK__TblObser__420EA5E7471EF5FB");

                entity.Property(e => e.DoctorNotes).IsUnicode(false);

                entity.Property(e => e.Observation)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.TblObservation)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__TblObserv__Docto__47DBAE45");
            });

            modelBuilder.Entity<TblPatient>(entity =>
            {
                entity.HasKey(e => e.PatientId)
                    .HasName("PK__TblPatie__970EC3668D1E248B");

                entity.Property(e => e.BloodGroup)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.EmergencyContact)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PatientAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PatientEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PatientGender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.PatientName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PatientPhone)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.TblPatient)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__TblPatien__Docto__2F10007B");
            });

            modelBuilder.Entity<TblPaymentBill>(entity =>
            {
                entity.HasKey(e => e.BillId)
                    .HasName("PK__TblPayme__11F2FC6AEC3DD9E8");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.BillDate).HasColumnType("date");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.TblPaymentBill)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__TblPaymen__Patie__4AB81AF0");
            });

            modelBuilder.Entity<TblPrescribedTest>(entity =>
            {
                entity.HasKey(e => e.PrescribedTestId)
                    .HasName("PK__TblPresc__16150AA172A8F6DD");

                entity.Property(e => e.PrescribedTestName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Prescription)
                    .WithMany(p => p.TblPrescribedTest)
                    .HasForeignKey(d => d.PrescriptionId)
                    .HasConstraintName("FK__TblPrescr__Presc__3C69FB99");
            });

            modelBuilder.Entity<TblPrescription>(entity =>
            {
                entity.HasKey(e => e.PrescriptionId)
                    .HasName("PK__TblPresc__4013083220634178");

                entity.Property(e => e.PrescriptionDate).HasColumnType("date");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.TblPrescription)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__TblPrescr__Docto__36B12243");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.TblPrescription)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__TblPrescr__Patie__35BCFE0A");
            });

            modelBuilder.Entity<TblRole>(entity =>
            {
                entity.HasKey(e => e.RoleId)
                    .HasName("PK__TblRole__8AFACE1A9A5A38E6");

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblStaff>(entity =>
            {
                entity.HasKey(e => e.StaffId)
                    .HasName("PK__TblStaff__96D4AB1736B5EA68");

                entity.Property(e => e.StaffAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StaffDateOfJoining).HasColumnType("date");

                entity.Property(e => e.StaffEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.StaffGender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.StaffName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.StaffPhone)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.StaffQualification)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblStaff)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__TblStaff__UserId__2C3393D0");
            });

            modelBuilder.Entity<TblTest>(entity =>
            {
                entity.HasKey(e => e.TestId)
                    .HasName("PK__TblTest__8CC331608CA5404A");

                entity.Property(e => e.NormalRange)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TestName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TestResult)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Report)
                    .WithMany(p => p.TblTest)
                    .HasForeignKey(d => d.ReportId)
                    .HasConstraintName("FK__TblTest__ReportI__440B1D61");

                entity.HasOne(d => d.Staff)
                    .WithMany(p => p.TblTest)
                    .HasForeignKey(d => d.StaffId)
                    .HasConstraintName("FK__TblTest__StaffId__44FF419A");
            });

            modelBuilder.Entity<TblUser>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__TblUser__1788CC4CF2FC205C");

                entity.Property(e => e.UserName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserPassword)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.TblUser)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_LOGIN");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
