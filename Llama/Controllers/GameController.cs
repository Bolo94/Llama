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
        private readonly UserManager<ApplicationUser> _userManager;
        public GameController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<IActionResult> Playground()
        {
            if (_signInManager.IsSignedIn(User))
            {
                ViewBag.IdAvatar = (await _userManager.GetUserAsync(HttpContext.User))?.IdAvatar;
                return View();
            }
            return RedirectToAction("Login", "Users");
        }
    }
}