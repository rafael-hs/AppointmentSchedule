using Microsoft.EntityFrameworkCore;

namespace AppointmentScheduleITIX.Backend.Model.Context
{
    public class MsSQLContext : DbContext
    {
        public MsSQLContext()
        {

        }

        public MsSQLContext(DbContextOptions<MsSQLContext> options) : base(options) { }

        public DbSet<Patient> patients { get; set; }
    }
}
