using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Llama.Models;
using Llama.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Llama.Controllers
{
    public class UsersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public UsersController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public IActionResult Login(string returnUrl)
        {
            return View(new LoginViewModel()
            {
                ReturnUrl = returnUrl
            });
        }

        public async Task<IActionResult> Index()
        {
            var userId = (await _userManager.GetUserAsync(HttpContext.User))?.Id;
            ViewBag.userId = userId;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel loginViewModel)
        {
            if (!ModelState.IsValid)
                return View(loginViewModel);

            var user = await _userManager.FindByNameAsync(loginViewModel.UserName);

            if(user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(user, loginViewModel.Password, false, false);
                if (result.Succeeded)
                {
                    if (string.IsNullOrEmpty(loginViewModel.ReturnUrl))
                        return RedirectToAction("Index", "Home");
                    return Redirect(loginViewModel.ReturnUrl);
                }
            }
            ModelState.AddModelError("", "Username/Password Not Found");
            return View(loginViewModel);
        }

        public ActionResult Register()
        {
            return View();
        }

        public ActionResult RegisterComplete()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(LoginViewModel loginViewModel)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser()
                {
                    UserName = loginViewModel.UserName,
                    NickName = loginViewModel.NickName,
                    Age = loginViewModel.Age,
                    Gender = loginViewModel.Gender
                };

                var result = await _userManager.CreateAsync(user, loginViewModel.Password);
                if (result.Succeeded)
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            return View(loginViewModel);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}
