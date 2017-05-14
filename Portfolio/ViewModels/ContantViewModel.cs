using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Portfolio.ViewModels
{
    public class ContantViewModel
    {
        [Required(ErrorMessage = "Поле должно быть установлено")]
        [StringLength(50, ErrorMessage = "Длина строки не должна быть более 50 символов")]
        public string Name { get; set; }

        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}", ErrorMessage = "Некорректный адрес")]
        [Required(ErrorMessage = "Поле должно быть установлено")]
        public string Email { get; set; }

        [StringLength(50, ErrorMessage = "Длина строки не должна быть более 50 символов")]
        [Required(ErrorMessage = "Поле должно быть установлено")]
        public string MobileNumber { get; set; }

        [StringLength(50, ErrorMessage = "Длина строки не должна быть более 50 символов")]
        [Required(ErrorMessage = "Поле должно быть установлено")]
        public string Subject { get; set; }

        [StringLength(150, ErrorMessage = "Длина строки не должна быть более 150 символов")]
        [Required(ErrorMessage = "Поле должно быть установлено")]
        public string Messege { get; set; }

    }
}