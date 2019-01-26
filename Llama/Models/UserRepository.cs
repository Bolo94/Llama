using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public class UserRepository : IUserRepository
    {
        private UserDbContext _userDbContext;

        public UserRepository(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }
        public void AddUser(Users user)
        {
            _userDbContext.Users.Add(user);
            _userDbContext.SaveChanges();
        }

        public IEnumerable<Users> GetAllUsers()
        {
            return _userDbContext.Users;
        }
    }
}
