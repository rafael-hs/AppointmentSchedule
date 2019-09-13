using AppointmentScheduleITIX.Backend.Model.Base;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppointmentScheduleITIX.Backend.Model
{
    [Table("patients")]
    public class Patient : BaseEntity
    {
        [Column("nome")]
        public string Nome { get; set; }

        [Column("data_nascimento")]
        public DateTime DataNascimento { get; set; }

        [Column("hora_inicio")]
        public TimeSpan HoraInicio { get; set; }

        [Column("hora_fim")]
        public TimeSpan HoraFim { get; set; }

        [Column("data_consulta")]
        public DateTime DataConsulta { get; set; }

        [Column("observacao")]
        public string Observacao { get; set; }


        public Patient()
        {
            
        }
    }
}
