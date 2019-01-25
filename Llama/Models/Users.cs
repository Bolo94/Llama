using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public partial class Users
    {
        [Key]
        public int IdUser { get; set; }
        public String NickName { get; set; }
        public String UserName { get; set; }
        public String Password { get; set; }
        public int Age { get; set; }
        public Boolean Gender { get; set; }
        //code
    }

}
