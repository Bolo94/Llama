using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public partial class Avatar
    {
        public int ID { get; set; }
        public int IDUser { get; set; }
        public int IDAvatarCos { get; set; }
    }
}