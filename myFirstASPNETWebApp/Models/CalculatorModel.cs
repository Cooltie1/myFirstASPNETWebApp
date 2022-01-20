using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace myFirstASPNETWebApp.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments needs to be a whole between 0 and 100")]
        public Int32 Assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Intex needs to be a whole between 0 and 100")]
        public Int32 Intex { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Intex needs to be a whole between 0 and 100")]
        public Int32 Quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Intex needs to be a whole between 0 and 100")]
        public Int32 EC { get; set; }



    }
}
