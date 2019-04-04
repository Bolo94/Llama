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
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Text;

namespace Llama.Controllers
{
    /*List for form submition test */

    public class CreateLlamaController : Controller
    {
        private readonly IAvatarRepository _AvatarRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        private IHostingEnvironment _env;


        public CreateLlamaController(IAvatarRepository AvatarRepository, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IHostingEnvironment env)
        {
            _AvatarRepository = AvatarRepository;
            _userManager = userManager;
            _signInManager = signInManager;
            _env = env;

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

        public async Task<IActionResult> test(String userSvg, String userIdStr)
        {
            ViewBag.userSvg = userSvg;
            ViewBag.userIdStr = userIdStr;

            ViewBag.IdAvatar = (await _userManager.GetUserAsync(HttpContext.User))?.IdAvatar;
            var finalUserSvg = userSvg;

            //var webRoot = _env.WebRootPath;

            ViewBag.FilePath = _env.WebRootPath;


            //var filePath = System.IO.Path.Combine(webRoot, @"game/Assets/userSpritesheets/test45.txt");


            // if(!System.IO.File.Exists(filePath)){

            //     String myText = "hot australian guy";

            //     System.IO.File.WriteAllText(filePath, "Hot brazilian girl");

            //     var logFile = System.IO.File.Create(filePath);

            //     logFile.Close();
            // }


            return View();
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