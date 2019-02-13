using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public class LlamaColorRepository 
    {
        private LlamaColorsDbContext _llamaColorRepositoryDbContext;

        public LlamaColorRepository(LlamaColorsDbContext LlamaColorDbContext)
        {
            _llamaColorRepositoryDbContext = llamaColorRepositoryDbContext;
        }
        public void AddLamaColor(LlamaColors pLlamaColor)
        {
       
           
            _llamaColorRepositoryDbContext.Users.Add(pLlamaColor);
            _llamaColorRepositoryDbContext.SaveChanges();
        }

        public IEnumerable<Users> GetAllUsers()
        {
            return _userDbContext.Users;
        }

        // private helper methods

       
    }
}
