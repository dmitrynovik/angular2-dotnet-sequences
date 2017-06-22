using NUnit.Framework;

namespace NumericSequences.UnitTest
{
    [TestFixture]
    public class WeirdNaturalsTest
    {
        [Test]
        public void When_Limit_15_Returns_Expected_Result() =>
            new WeirdNaturalNumbers(15).SequenceEqual(new[] { "1", "2", "C", "4", "E", "C", "7", "8", "C", "E", "11", "C", "13", "14", "Z" });
    }
}