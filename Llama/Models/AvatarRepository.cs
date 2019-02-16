using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public class AvatarRepository : IAvatarRepository
    {
        private UserDbContext _DbContext;

        public AvatarRepository(UserDbContext userDbContext)
        {
            _DbContext = userDbContext;
        }

        public void AddAvatar(Avatar pAvatar)
        {

            _DbContext.Avatars.Add(pAvatar);
            _DbContext.SaveChanges();
        }

        public IEnumerable<Avatar> GetAvatar()
        {
            return _DbContext.Avatars;
        }
    }
}
