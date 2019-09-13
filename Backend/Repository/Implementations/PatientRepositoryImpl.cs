using AppointmentScheduleITIX.Backend.Model;
using AppointmentScheduleITIX.Backend.Model.Context;
using AppointmentScheduleITIX.Backend.Repository.Generic;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AppointmentScheduleITIX.Backend.Repository.Implementations
{
    public class PatientRepositoryImpl : GenericRepository<Patient>, IPatientRepository
    {
        public PatientRepositoryImpl(MsSQLContext context) : base(context) { }

        public bool ExistsDate(int id, DateTime dataConsulta, TimeSpan horaInicio, TimeSpan horaFim)
        {
            try
            {
                string dataConsultaFormatada = dataConsulta.ToString("yyyy-MM-dd");

                var result = _dataset.SingleOrDefault(i => i.DataConsulta == dataConsulta && i.HoraInicio == horaInicio && i.HoraFim == horaFim);

                if(result == null)
                {
                    return false;
                }
                if(result.Id == id)
                {
                    return false;
                }
                if (result != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }catch(Exception ex)
            {
                throw new Exception("Error ao verificar paciente, Error: ", ex);
            }
        }

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
