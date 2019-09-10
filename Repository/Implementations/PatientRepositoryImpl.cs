using AppointmentScheduleITIX.Model;
using AppointmentScheduleITIX.Model.Context;
using AppointmentScheduleITIX.Repository.Generic;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AppointmentScheduleITIX.Repository.Implementations
{
    public class PatientRepositoryImpl : GenericRepository<Patient>, IPatientRepository
    {
        public PatientRepositoryImpl(MsSQLContext context) : base(context) { }

        public bool ExistsDate(DateTime dataConsulta, TimeSpan horaInicio, TimeSpan horaFim)
        {
            try
            {
                string sql = $"select * from patients where data_consulta = '{dataConsulta}' and hora_inicio = '{horaInicio}' and hora_fim = '{horaFim}'";
                //string sql = "select * from patients";
                //.Where(p => p.DataConsulta == dataConsulta && p.HoraInicio == horaInicio && p.HoraFim == horaFim);
                var result = _dataset.FromSql(sql).ToList();

                if (result.Count >=1)
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
