using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Llama.ViewModels;

namespace Llama.Models
{
    public class AvatarRepository : IAvatarRepository
    {
        private AppDbContext _DbContext;

        public AvatarRepository(AppDbContext appDbContext)
        {
            _DbContext = appDbContext;
        }

        public void AddAvatar(Avatar pAvatar)
        {

            _DbContext.Avatars.Add(pAvatar);
            _DbContext.SaveChanges();
        }

        public IEnumerable<Avatar> GetAvatar()
        {
            throw new NotImplementedException();
        }
    }
}
