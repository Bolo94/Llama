using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser() : base()
        {

        }

        public string NickName { get; set; }

        public int Age { get; set; }

        public Boolean Gender { get; set; }

        public int IdAvatar { get; set; }

    }
}
