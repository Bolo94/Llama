using System.Collections.Generic;

namespace Llama.Models
{
    public interface IAvatarRepository
    {
        void AddAvatar(Avatar pAvatar);
        IEnumerable<Avatar> GetAvatar();
    }
}