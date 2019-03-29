using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public partial class Avatar
    {
        [Key]
       public int IdAvatar { get; set; }
        
       public string IdUser { get; set; }

       public String Name { get; set; }
       public String BodyColor { get; set; }
       public String EyesColor { get; set; }
       public String TailColor { get; set; }
       public String EarsColor { get; set; }

   }
    
}