using System;
using System.Threading.Tasks;
using AppointmentScheduleITIX.Business;
using AppointmentScheduleITIX.Model;
using Microsoft.AspNetCore.Mvc;

namespace AppointmentScheduleITIX.Controllers
{
    [Route("api/[controller]")]
    public class ScheduleController : Controller
    {
        private readonly IPatientBusiness _patientBusiness;

        public ScheduleController(IPatientBusiness patientBusiness)
        {
            _patientBusiness = patientBusiness;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("createpatient")]
        public async Task<IActionResult> CreatePatient([FromBody] Patient patient)
        {
            if (patient.HoraFim < patient.HoraInicio)
            {
                return BadRequest("Horário inválido");
            }
            if (patient == null) return BadRequest("model is null");

            if (!_patientBusiness.ExistsDate(patient.DataConsulta, patient.HoraInicio, patient.HoraFim))
            {
                return await Task.FromResult(new OkObjectResult(_patientBusiness.Create(patient)));

            }
            else
            {
                return BadRequest("Já existe uma consulta nesse mesmo horário");
            }
        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAll()
        {
            return await Task.FromResult(new OkObjectResult(_patientBusiness.FindAll()));
        }

        [HttpGet("getpatient/{id}")]
        public async Task<IActionResult> GetPatientById(long id)
        {
            return await Task.FromResult(new OkObjectResult(_patientBusiness.FindById(id)));
        }

        [HttpGet("getpatients/{name}")]
        public async Task<IActionResult> GetPatientByName(string name)
        {
            return await Task.FromResult(new OkObjectResult(_patientBusiness.FindByName(name)));
        }

        [HttpPut("updatepatient/{id}")]
        public async Task<IActionResult> UpdatePatient([FromBody] Patient patient, int id)
        {
            if (patient.HoraFim > patient.HoraInicio)
            {
                return BadRequest("Horário inválido");
            }
            if (patient == null) return BadRequest("model is null");

            if (!_patientBusiness.ExistsDate(patient.DataConsulta, patient.HoraInicio, patient.HoraFim))
            {
                return await Task.FromResult(new OkObjectResult(_patientBusiness.Update(patient, id)));
            }
            else
            {
                return BadRequest("Já existe uma consulta nesse mesmo horário");
            }
        }

        [HttpDelete("deletepatient/{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            try
            {
                await Task.Run(() => { _patientBusiness.Delete(id); });
                return Ok("Excluido com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest("Error ao excluir registro: " + ex);
            }
        }
    }
}
