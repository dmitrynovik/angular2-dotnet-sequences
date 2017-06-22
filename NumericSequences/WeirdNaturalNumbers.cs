using System.Collections.Generic;
using System.Linq;

namespace NumericSequences
{
    public class WeirdNaturalNumbers : PositiveNaturalNumbers
    {
        public WeirdNaturalNumbers(int limit) : base(limit) { }

        public override IEnumerable<string> Print()
        {
            return Enumerate().Select(x =>
            {
                if (x % 15 == 0) return "Z";
                if (x % 5 == 0) return "E";
                if (x % 3 == 0) return "C";
                return x.ToString();
            });
        }
    }
}