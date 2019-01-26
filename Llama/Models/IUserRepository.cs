using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public interface IUserRepository
    {
        void AddUser(Users user);
        IEnumerable<Users> GetAllUsers();
    }
}
