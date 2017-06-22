using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;

namespace NumericSequences.UnitTest
{
    public static class SequenceExtensions
    {
        public static void SequenceEqual<T>(this ISequence<T> seq, IEnumerable<T> expected)
        {
            var numerals = seq.Enumerate();
            Assert.IsTrue(expected.SequenceEqual(numerals));
        }

        public static void SequenceEqual<T>(this ISequence<T> seq, IEnumerable<string> expected)
        {
            var numerals = seq.Print();
            Assert.IsTrue(expected.SequenceEqual(numerals));
        }
    }
}