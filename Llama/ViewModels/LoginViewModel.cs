using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [Display(Name ="User Name")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string NickName { get; set; }

        public int Age { get; set; }

        public Boolean Gender { get; set; }

        public string ReturnUrl { get; set; }
    }
}
