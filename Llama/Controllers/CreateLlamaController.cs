using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Llama.Models;
using Microsoft.AspNetCore.Mvc;

namespace Llama.Controllers {
    public class CreateLlamaController : Controller {
        public IActionResult Index () {
            return View ();
        }

        public IActionResult Name () {
            return View ();
        }

        public IActionResult Customization () {
            return View ();
        }
    }
}