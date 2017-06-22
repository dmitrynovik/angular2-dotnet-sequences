using NUnit.Framework;

namespace NumericSequences.UnitTest
{
    [TestFixture]
    public class EvenNaturalsTest
    {
        [Test]
        public void When_Limit_5_Returns_2_4() => new EvenPositiveNaturalNumbers(5).SequenceEqual(new[] {2, 4});
    }
}