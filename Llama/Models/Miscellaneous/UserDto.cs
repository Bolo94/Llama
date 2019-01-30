using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public partial class UserDto
    {
     
        [Key]
        public int IdUser { get; set; }

        [Required]
        [StringLength(20, ErrorMessage = "NickName is required")]
        public String NickName { get; set; }

        [StringLength(20, ErrorMessage = "UserName is required")]
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
    }
}
