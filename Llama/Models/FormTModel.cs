using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public partial class FormTModel
    {
        public String Name { get; set; }

        public String Color { get; set; }

        public String SvgString { get; set; }

        public String Pet { get; set; }

    }

}