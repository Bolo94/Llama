using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Llama.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Llama.Controllers
{
    public class GameController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public GameController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }

        public IActionResult Playground()
        {
            if (_signInManager.IsSignedIn(User))
            {
                return View();
            }
            return RedirectToAction("Login", "Users");
        }
    }
}