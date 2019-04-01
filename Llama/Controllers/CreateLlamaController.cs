using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Llama.Models;
using Llama.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Llama.Controllers
{
    /*List for form submition test */

    public class CreateLlamaController : Controller
    {
        private readonly IAvatarRepository _AvatarRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager; 

        public CreateLlamaController(IAvatarRepository AvatarRepository, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _AvatarRepository = AvatarRepository;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            if (_signInManager.IsSignedIn(User))
            {
                return View();
            }
            return RedirectToAction("Login", "Users");
        }

        [HttpPost]
        public IActionResult Name(Avatar pAvatar)
        {
           /*  if (ModelState.IsValid)
            {
                _AvatarRepository.AddAvatar(pAvatar);

            }*/

        

            return View(pAvatar);

        }


        public async Task<IActionResult> NamePageTest(Avatar pAvatarTest)
        {
            pAvatarTest.IdUser = (await _userManager.GetUserAsync(HttpContext.User))?.Id;

            if (ModelState.IsValid)
            {
                _AvatarRepository.AddAvatar(pAvatarTest);

            }
            return View(pAvatarTest);

        }

      
        public IActionResult Customization()
        {
            return View();
        }
        public IActionResult CreateAvatar()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Customization(Avatar pAvatar)
        {
           
          
            return View(pAvatar);
           
        }

        // public IActionResult LlamaColor()
        // {
        //     return View();
        // }

        /* public IActionResult LlamaColorResult(Avatar avatar)
         {
            return View(avatar);
         }*/
    }
}