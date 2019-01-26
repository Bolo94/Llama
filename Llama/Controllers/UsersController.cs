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
        private UserDbContext _context;
        public UsersController( UserDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View(_context.Users.ToList());
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Users users)
        {
            if (ModelState.IsValid)
            {
                _context.Users.Add(users);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(User);
        }
    }
}
