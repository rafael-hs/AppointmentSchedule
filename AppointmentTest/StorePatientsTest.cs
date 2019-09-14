using AppointmentScheduleITIX.Backend.Model;
using AppointmentTest.FakeRepository;
using System;
using Xunit;

namespace AppointmentTest
{
    public class StorePatientsTest
    {
        [Fact]
        public void CreateWithSuccess()
        {

            var repository = new Repository();

            var patient = new Patient
            {
                Id = 850,
                Nome = "Matias",
                DataNascimento = new DateTime(1994, 05, 24),
                DataConsulta = new DateTime(2019, 10, 23),
                HoraInicio = new TimeSpan(08, 30, 00),
                HoraFim = new TimeSpan(09, 30, 00),
                Observacao = "teste Automatizaduuuuuuuuu"
            };

            var patientTest = repository.Create(patient);

            Assert.Equal(850, patientTest.Id);
        }

        [Fact]
        public void CreateWithError()
        {
            var patient = new Patient
            {
                Id = 850,
                Nome = "",
                DataNascimento = new DateTime(1994, 05, 24),
                DataConsulta = new DateTime(2019, 10, 23),
                HoraInicio = new TimeSpan(08, 30, 00),
                HoraFim = new TimeSpan(09, 30, 00),
                Observacao = "teste Automatizaduuuuuuuuu"
            };

            var repository = new Repository();

            var ex = Assert.Throws<Exception>(() => repository.CreateVoid(patient));
            Assert.Equal("Pacient inválido para cadastro", ex.Message);
        }
    }
}
