using AppointmentScheduleITIX.Model;
using AppointmentScheduleITIX.Repository.Generic;
using System;
using System.Collections.Generic;

namespace AppointmentScheduleITIX.Repository
{
    public interface IPatientRepository : IRepository<Patient>
    {
        IEnumerable<Patient> FindByName(string name);

        bool ExistsDate(DateTime dataInicio, TimeSpan horaInicio, TimeSpan horaFim);
    }
}
