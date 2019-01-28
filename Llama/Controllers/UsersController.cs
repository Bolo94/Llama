using Llama.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Controllers
{
    public class UsersController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public IActionResult Index()
        {
            return View(_userRepository.GetAllUsers());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Users user)
        {
            if (ModelState.IsValid)
            {
                _userRepository.AddUser(user);
                return RedirectToAction("RegisterComplete");
            }
            return View(user);
        }

        public IActionResult RegisterComplete()
        {
            return View();
        }

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public IActionResult Create(Users users)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _context.Users.Add(users);
        //        _context.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    return View(User);
        //}
    }
}
