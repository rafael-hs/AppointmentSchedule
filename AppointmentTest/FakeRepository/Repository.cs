using AppointmentScheduleITIX.Backend.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace AppointmentTest.FakeRepository
{
    public class Repository
    {
        public Patient Create(Patient item)
        {
            if (item.Id != 0)
            {
                return item;
            }
            if (string.IsNullOrEmpty(item.Nome))
            {
                throw new Exception("Pacient inválido para cadastro");
            }

            return item;
        }

        public void CreateVoid(Patient item)
        {
            if (item.Id == 0)
            {
                throw new Exception("Pacient inválido para cadastro");
            }
            if (string.IsNullOrEmpty(item.Nome))
            {
                throw new Exception("Pacient inválido para cadastro");
            }


        }
    }

}
