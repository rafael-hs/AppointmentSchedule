using AppointmentScheduleITIX.Model;
using AppointmentScheduleITIX.Model.Context;
using AppointmentScheduleITIX.Repository.Generic;
using System.Collections.Generic;
using System.Linq;

namespace AppointmentScheduleITIX.Repository.Implementations
{
    public class PatientRepositoryImpl : GenericRepository<Patient>, IPatientRepository
    {
        public PatientRepositoryImpl(MsSQLContext context) : base(context) { }

        public IEnumerable<Patient> FindByName(string name)
        {
            if (!string.IsNullOrEmpty(name))
            {
                return _context.patients.Where(p => p.Nome.Contains(name));
            }
            return _context.patients.ToList();
        }
    }
}
