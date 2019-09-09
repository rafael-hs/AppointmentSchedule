using AppointmentScheduleITIX.Model;
using AppointmentScheduleITIX.Repository.Generic;
using System.Collections.Generic;

namespace AppointmentScheduleITIX.Repository
{
    public interface IPatientRepository : IRepository<Patient>
    {
        IEnumerable<Patient> FindByName(string name);
    }
}
