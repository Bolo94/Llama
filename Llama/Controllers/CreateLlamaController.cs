using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Llama.Models;
using Llama.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Llama.Controllers
{


    /*List for form submition test */

    public class CreateLlamaController : Controller
    {
        private readonly IAvatarRepository _AvatarRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public CreateLlamaController(IAvatarRepository AvatarRepository, UserManager<ApplicationUser> userManager)
        {
            _AvatarRepository = AvatarRepository;
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            return View();
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