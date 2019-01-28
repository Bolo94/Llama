using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace Llama.Models
{
    public partial class Users
    {
        public int IdUser { get; set; }

        public String NickName { get; set; }

        public String UserName { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public int Age { get; set; }

        public Boolean Gender { get; set; }
        
        //code
       

    }

}
