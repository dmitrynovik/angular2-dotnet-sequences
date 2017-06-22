using NUnit.Framework;

namespace NumericSequences.UnitTest
{
    [TestFixture]
    public class FibonacciTest
    {
        [Test]
        public void When_Limit_13_Returns_Expected_Result() =>
            new FibonacciNumbers(13).AssertEquals(new[] { 1, 1, 2, 3, 5, 8, 13 });
    }
}