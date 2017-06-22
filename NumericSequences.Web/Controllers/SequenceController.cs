using System.Net.Http;

namespace NumericSequences.Web.Controllers
{
    public class SequenceController : BaseApiController
    {
        static SequenceFactory Factory = new SequenceFactory(); 

        /// <summary>
        /// Creates and enumerates a sequence
        /// </summary>
        /// <param name="name">Sequence name</param>
        /// <param name="limit">Sequence limit, a natural positive number</param>
        /// <returns></returns>
        public HttpResponseMessage Get(string name, int limit)
        {
            var sequence = Factory.Create<int>(name, limit);
            return Json(sequence.Print());
        }
    }
}
