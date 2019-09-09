using AppointmentScheduleITIX.Model.Base;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppointmentScheduleITIX.Model
{
    [Table("patients")]
    public class Patient : BaseEntity
    {
        [Column("nome")]
        public string Nome { get; set; }
        [Column("data_nascimento")]
        public DateTime DataNascimento { get; set; }
        [Column("data_inic_consulta")]
        public DateTime InicioConsulta { get; set; }
        [Column("data_fin_consulta")]
        public DateTime FinalConsulta { get; set; }
        [Column("observacao")]
        public string Observacao { get; set; }


        public Patient()
        {
            
        }
    }
}
