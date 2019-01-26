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

        [Required]
        public String NickName { get; set; }

        [Required]
        public String UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public String Password { get; set; }

        [Required]
        [Range(1, 15)]
        public int Age { get; set; }

        [Required]
        public Boolean Gender { get; set; }
        //code
    }

}
