using AppointmentScheduleITIX.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentScheduleITIX.Business
{
    public interface IPatientBusiness
    {
        Patient Create(Patient patient);
        Patient FindById(long id);
        List<Patient> FindAll();
        Patient Update(Patient patient);
        void Delete(long id);
        IEnumerable<Patient> FindByName(string name);

        bool Exists(long id);
    }
}
