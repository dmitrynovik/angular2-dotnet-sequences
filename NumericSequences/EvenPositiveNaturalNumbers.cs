using System.Collections.Generic;
using System.Linq;

namespace NumericSequences
{
    public class EvenPositiveNaturalNumbers : PositiveNaturalNumbers
    {
        public EvenPositiveNaturalNumbers(int limit) : base(limit) { }

        public override IEnumerable<int> Enumerate() => base.Enumerate().Where(x => x % 2 == 0);
    }
}