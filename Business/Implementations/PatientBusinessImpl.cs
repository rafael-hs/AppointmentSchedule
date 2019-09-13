using System;
using System.Collections.Generic;
using AppointmentScheduleITIX.Model;
using AppointmentScheduleITIX.Repository;

namespace AppointmentScheduleITIX.Business.Implementations
{
    public class PatientBusinessImpl : IPatientBusiness
    {
        private IPatientRepository _repository;

        public PatientBusinessImpl(IPatientRepository patientRepository)
        {
            _repository = patientRepository;
        }

        public Patient Create(Patient patient)
        {
            return _repository.Create(patient);
        }

        public void Delete(int id)
        {
            _repository.Delete(id);
        }

        public bool ExistsDate(int id, DateTime dataInicio, TimeSpan horaInicio, TimeSpan horaFim)
        {
            return _repository.ExistsDate(id,dataInicio, horaInicio, horaFim);
        }

        public List<Patient> FindAll()
        {
            return _repository.FindAll();
        }

        public Patient FindById(int id)
        {
            return _repository.FindById(id);
        }

        public IEnumerable<Patient> FindByName(string name)
        {
            return _repository.FindByName(name);
        }

        public Patient Update(Patient patient)
        {
            return _repository.Update(patient);
        }
    }
}
