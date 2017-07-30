using Portfolio.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using Portfolio.Services;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        DbAccessService repository = new DbAccessService();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Contact(ContantViewModel contactModel)
        {
            
            //Todo Send Email message, add to DB message
            if (ModelState.IsValid)
            {
                using (portfolioEntities port = new portfolioEntities())
                {
                    var msg = new InfoMsg()
                    {
                        email = contactModel.Email,
                        name = contactModel.Name,
                        text = contactModel.Messege,
                        phone = contactModel.MobileNumber,
                        subject = contactModel.Subject,
                    };
                    repository.AddMessage(msg);
                }
                    //for testing busy idicator
                    //Thread.Sleep(2000);
                    return PartialView("~/Views/Partials/Partial_Success.cshtml", "Your message success sends!!");
            }
            return PartialView("~/Views/Partials/Partial_Error.cshtml", "Something Wrong!");
        }
    }
}