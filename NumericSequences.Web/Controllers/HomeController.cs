using System.Web.Mvc;

namespace NumericSequences.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Numeric Sequences App";
            return View();
        }
    }
}
