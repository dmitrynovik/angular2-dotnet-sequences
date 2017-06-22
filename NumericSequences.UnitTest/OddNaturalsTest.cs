using NUnit.Framework;

namespace NumericSequences.UnitTest
{
    [TestFixture]
    public class OddNaturalsTest
    {
        [Test]
        public void When_Limit_5_Returns_1_3_5() => new OddPositiveNaturalNumbers(5).AssertEquals(new[] { 1, 3, 5 });
    }
}