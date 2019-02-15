using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public partial class LlamaColors
    {
        //Avatar's colors

        [Key]
        public int ID{get; set;}
        public String ColorName { get; set; }
        public String HexCode { get; set; }



    }

}