using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Llama.Models;
using Microsoft.AspNetCore.Mvc;

namespace Llama.Controllers
{
    public class GameController : Controller
    {
       public IActionResult Playground()
        {
            return View();
        }

       
    }
}