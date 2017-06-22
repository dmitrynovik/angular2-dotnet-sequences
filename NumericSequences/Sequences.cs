using System;
using System.Linq;
using System.Collections.Generic;

namespace NumericSequences
{
    public interface ISequence<out T>
    {
        IEnumerable<T> Enumerate();
        IEnumerable<string> Print();
    }

    public class PositiveNaturalNumbers : ISequence<int>
    {
        public PositiveNaturalNumbers(int limit)
        {
            if (limit <= 0) throw new ArgumentException("Please provide positive integer", nameof(limit));
            Limit = limit;
        }

        public int Limit { get; }

        public virtual IEnumerable<int> Enumerate() => Enumerable.Range(1, Limit);

        public virtual IEnumerable<string> Print() => Enumerate().Select(x => x.ToString());
    }

    public class EvenPositiveNaturalNumbers : PositiveNaturalNumbers
    {
        public EvenPositiveNaturalNumbers(int limit) : base(limit) { }

        public override IEnumerable<int> Enumerate() => base.Enumerate().Where(x => x % 2 == 0);
    }

    public class OddPositiveNaturalNumbers : PositiveNaturalNumbers
    {
        public OddPositiveNaturalNumbers(int limit) : base(limit) { }

        public override IEnumerable<int> Enumerate() => base.Enumerate().Where(x => x % 2 == 1);
    }

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
