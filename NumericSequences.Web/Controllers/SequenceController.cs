using System.Net.Http;

namespace NumericSequences.Web.Controllers
{
    public class SequenceController : BaseApiController
    {
        static SequenceFactory Factory = new SequenceFactory(); 

        public HttpResponseMessage Get(string name, int limit)
        {
            var sequence = Factory.Create<int>(name, limit);
            return Json(sequence.Print());
        }
    }
}
