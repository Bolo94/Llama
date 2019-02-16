using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Llama.Models
{
    public class UserDbContext : DbContext
    {
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Avatar> Avatars { get; set; }

        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
  
}
