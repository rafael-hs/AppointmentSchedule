using AppointmentScheduleITIX.Model.Base;
using System.Collections.Generic;

namespace AppointmentScheduleITIX.Repository.Generic
{
    public interface IRepository<T> where T : BaseEntity
    {
        T Create(T item);
        T FindById(int id);
        List<T> FindAll();
        T Update(T item, int id);
        void Delete(int id);

        bool Exists(long? id);
    }
}
