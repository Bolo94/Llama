using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Llama.Models;
using Microsoft.AspNetCore.Mvc;

namespace Llama.Controllers
{


    /*List for form submition test */

    public class CreateLlamaController : Controller
    {
        private readonly IAvatarRepository _AvatarRepository;

        public CreateLlamaController(IAvatarRepository AvatarRepository)
        {
            _AvatarRepository = AvatarRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Name()
        {

            return View();

        }


        public IActionResult NamePageTest(LlamaName test)
        {

            return View(test);

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
            if (ModelState.IsValid)
            {
                _AvatarRepository.AddAvatar(pAvatar);

            }
            return View(pAvatar);
        }

        // public IActionResult LlamaColor()
        // {
        //     return View();
        // }

        // public IActionResult LlamaColorResult(LlamaColors llamacolor)
        // {
        //     return View(llamacolor);
        // }
    }
}