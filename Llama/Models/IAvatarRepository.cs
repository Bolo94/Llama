using Llama.ViewModels;
using System.Collections.Generic;

namespace Llama.Models
{
    public interface IAvatarRepository
    {
        //void AddAvatar(Avatar pAvatar);
        void AddAvatar(Avatar avartarVM);
        IEnumerable<Avatar> GetAvatar();
    }
}