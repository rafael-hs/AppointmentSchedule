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
            if (patient == null) return BadRequest("model is null");

            if (patient.HoraFim.Hours == 0 || patient.HoraInicio.Hours == 0)
            {
                return BadRequest("Horário inválido");
            }
            if (patient.HoraFim.Hours < patient.HoraInicio.Hours)
            {
                return BadRequest("Horário inválido");
            }

            if (!_patientBusiness.ExistsDate(patient.Id,patient.DataConsulta, patient.HoraInicio, patient.HoraFim))
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
            try
            {
                return await Task.FromResult(new OkObjectResult(_patientBusiness.FindAll()));
            }
            catch (Exception ex)
            {
                return BadRequest("Erro ao buscar as consultas, ERROR: " + ex);
            }
        }

        [HttpGet("getpatient/{id}")]
        public async Task<IActionResult> GetPatientById(int id)
        {
            try
            {
                return await Task.FromResult(new OkObjectResult(_patientBusiness.FindById(id)));

            }
            catch (Exception ex)
            {
                return BadRequest("Erro ao buscar a consulta, ERROR: " + ex);
            }
        }

        [HttpGet("getpatients/{name}")]
        public async Task<IActionResult> GetPatientByName(string name)
        {
            try
            {
                return await Task.FromResult(new OkObjectResult(_patientBusiness.FindByName(name)));

            }
            catch (Exception ex)
            {
                return BadRequest("Erro ao buscar a consulta, ERROR: " + ex);
            }
        }

        [HttpPut("updatepatient")]
        public async Task<IActionResult> UpdatePatient([FromBody]Patient patient)
        {
            if (patient == null) return BadRequest("model is null");

            if (patient.HoraFim < patient.HoraInicio)
            {
                return BadRequest("Horário inválido");
            }

            if (!_patientBusiness.ExistsDate(patient.Id,patient.DataConsulta, patient.HoraInicio, patient.HoraFim))
            {
                return await Task.FromResult(new OkObjectResult(_patientBusiness.Update(patient)));
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
