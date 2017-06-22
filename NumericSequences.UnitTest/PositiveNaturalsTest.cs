using System;
using NUnit.Framework;

namespace NumericSequences.UnitTest
{
    [TestFixture]
    public class PositiveNaturalsTest
    {
        [Test]
        public void When_Limit_Negative_Throws_Error()
        {
            Assert.Throws<ArgumentException>(() => new PositiveNaturalNumbers(-1));
        }

        [Test] 
        public void When_Limit_Zero_Throws_Error()
        {
            Assert.Throws<ArgumentException>(() => new PositiveNaturalNumbers(0));
        }

        [Test]
        public void When_Limit_5_Returns_1_To_5() => new PositiveNaturalNumbers(5).SequenceEqual(new[] {1, 2, 3, 4, 5});
    }
}
