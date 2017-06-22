using System.Collections.Generic;
using System.Linq;

namespace NumericSequences
{
    public class OddPositiveNaturalNumbers : PositiveNaturalNumbers
    {
        public OddPositiveNaturalNumbers(int limit) : base(limit) { }

        public override IEnumerable<int> Enumerate() => base.Enumerate().Where(x => x % 2 == 1);
    }
}