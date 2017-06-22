using System.Collections.Generic;

namespace NumericSequences
{
    public class FibonacciNumbers : PositiveNaturalNumbers
    {
        public FibonacciNumbers(int limit) : base(limit) { }

        public override IEnumerable<int> Enumerate()
        {
            for (int previous = 0, current = 1; current <= Limit;)
            {
                yield return current;

                var tmp = current;
                current = current + previous;
                previous = tmp;
            }
        }
    }
}
