using AppointmentScheduleITIX.Backend.Model;
using System;
using System.Collections.Generic;

namespace AppointmentScheduleITIX.Backend.Business
{
    public interface IPatientBusiness
    {
        Patient Create(Patient patient);
        Patient FindById(int id);
        List<Patient> FindAll();
        Patient Update(Patient patient);
        void Delete(int id);
        IEnumerable<Patient> FindByName(string name);

        bool ExistsDate(int id, DateTime dataInicio, TimeSpan horaInicio, TimeSpan horaFim);
    }
}
