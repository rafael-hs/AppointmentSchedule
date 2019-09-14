using AppointmentScheduleITIX.Backend.Model;
using AppointmentScheduleITIX.Backend.Repository.Generic;
using System;
using System.Collections.Generic;

namespace AppointmentScheduleITIX.Backend.Repository
{
    public interface IPatientRepository : IRepository<Patient>
    {
        IEnumerable<Patient> FindByName(string name);

        bool ExistsDate(int id, DateTime dataInicio, TimeSpan horaInicio, TimeSpan horaFim);
    }
}
