﻿using System.Linq;
using System.Net.Http;

namespace NumericSequences.Web.Controllers
{
    public class SequenceController : BaseApiController
    {
        private static readonly SequenceFactory Factory = new SequenceFactory(); 

        /// <summary>Creates and enumerates a sequence</summary>
        /// <param name="name">Sequence name</param>
        /// <param name="limit">Sequence limit, a natural positive number</param>
        public HttpResponseMessage Get(string name, int limit)
        {
            var sequence = Factory.Create<int>(name, limit);
            return Json(new { sequence.Name, Values = sequence.Print()});
        }

        public HttpResponseMessage GetAll(int limit)
        {
            var sequences = Factory.CreateAll(limit);               
            return Json(sequences.Select(x => new { x.Name, Values = x.Print() }));
        }
    }
}
