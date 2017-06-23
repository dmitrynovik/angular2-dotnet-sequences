using System;
using System.Collections.Generic;
using System.Linq;

namespace NumericSequences
{
    public class PositiveNaturalNumbers : ISequence<int>
    {
        public PositiveNaturalNumbers(int limit)
        {
            if (limit <= 0) throw new ArgumentException("Please provide positive integer", nameof(limit));
            Limit = limit;
        }

        public int Limit { get; }

        public string Name => GetType().Name.AddSpacesAfterCapitals();

        public virtual IEnumerable<int> Enumerate() => Enumerable.Range(1, Limit);

        public virtual IEnumerable<string> Print() => Enumerate().Select(x => x.ToString());
    }
}