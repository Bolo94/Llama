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

            return View(pAvatar);

        }


        public async Task<IActionResult> NamePageTest(Avatar pAvatarTest)
        {
            pAvatarTest.IdUser = (await _userManager.GetUserAsync(HttpContext.User))?.Id;


            if (ModelState.IsValid)
            {
                
                _AvatarRepository.AddAvatar(pAvatarTest);
                
                var user = await _userManager.GetUserAsync(HttpContext.User);
                user.IdAvatar = pAvatarTest.IdAvatar;
                await _userManager.UpdateAsync(user);

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

        public async Task<IActionResult> test(String userSvg, String userSprSheetPath, String userIdAvatar)
        {
            ViewBag.userSvg = userSvg;
            ViewBag.userSprSheetPath = userSprSheetPath;
            ViewBag.userIdAvatar = userIdAvatar;


            ViewBag.IdAvatar = (await _userManager.GetUserAsync(HttpContext.User))?.IdAvatar;

            ViewBag.UserName = (await _userManager.GetUserAsync(HttpContext.User))?.NormalizedUserName;

            ViewBag.FilePath = _env.WebRootPath;


            var webRoot = @ViewBag.FilePath;

            var userSvgHtml = @ViewBag.userSvg;

            var usrNickName = @ViewBag.UserName;

            var userSprPath = "game/Assets/userSpritesheets/" + usrNickName + ".svg";



            var filePath = System.IO.Path.Combine(webRoot, @userSprPath);

            System.IO.File.WriteAllText(filePath, userSvgHtml);



            //     String myText = "hot australian guy";

            //     System.IO.File.WriteAllText(filePath, "Hot brazilian girl");


            //return View();

            return RedirectToAction("Playground", "Game");
        }


    }

    
}